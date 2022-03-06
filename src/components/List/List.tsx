import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { ListProps } from './_types';

export const List: React.FC<ListProps> = (props) => {
  const { selectedValue } = props;
  const [repositories, setRepositories] = useState([]);

  return (
    <Row>
      <Col>
        <h1>List of Repositories</h1>
      </Col>
    </Row>
  );
};
