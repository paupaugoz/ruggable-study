import React, { useState, useEffect } from 'react';
import { Row, Col, ListGroup, Badge } from 'react-bootstrap';
import { getRepositoriesByUser } from '../../api/Github/Github';
import { ListProps, Repository } from './_types';
import './_list.scss';
import { ListTestId } from './TestId';

export const List: React.FC<ListProps> = (props) => {
  const { selectedValue } = props;
  const [repositories, setRepositories] = useState([] as Repository[]);

  useEffect(() => {
    (async () => {
      const { data, error } = await getRepositoriesByUser(selectedValue);

      if (error) {
        // handle error
        return null;
      }
      if (!data) setRepositories([]);
      setRepositories(data.items);
      return null;
    })();

    return () => {
      // to-do: cleanup async api request
    };
  }, [selectedValue]);

  return (
    <Row id='list-component'>
      <Col>
        {repositories.length > 0 && (
          <ListGroup as='ol' numbered data-testid={ListTestId.listGroup}>
            {repositories.map((repository: Repository) => {
              const {
                full_name: fullName,
                language,
                html_url: htmlUrl,
                stargazers_count: starsCount,
              } = repository;
              return (
                <ListGroup.Item
                  key={fullName}
                  as='li'
                  className='d-flex justify-content-between align-items-start'
                >
                  <div className='ms-2 me-auto'>
                    <div className='fw-bold'>
                      <a target='_blank' href={htmlUrl} rel='noreferrer'>
                        {fullName}
                      </a>
                    </div>
                    <div>
                      <p>{language}</p>
                    </div>
                  </div>
                  <Badge bg='dark' pill>
                    {`Stars: ${starsCount}`}
                  </Badge>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        )}
      </Col>
    </Row>
  );
};
