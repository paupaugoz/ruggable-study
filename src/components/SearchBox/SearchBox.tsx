import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';
import { Row, Col } from 'react-bootstrap';
import './_searchBox.scss';
import _ from 'lodash';
import { getUser } from '../../api/Github/Github';
import { User } from '../../types/User';
import { SearchBoxTestId } from './TestId';

export const SearchBox: React.FC = () => {
  const [options, setOptions] = useState([]);
  const fetchGithubUsers = _.debounce(async (input, callback) => {
    // this should search for users and autosuggest results
    const { data, error } = await getUser(input);

    if (error) {
      // handle error
      console.log('ERROR: ', error);
    }
    // if (!data) return callback([]);
    const formattedOptions = data.items.map((user: User) => {
      const { login } = user;
      return { value: login, label: login };
    });
    setOptions(formattedOptions);
    callback(formattedOptions);
  }, 1000);

  const loadOptions = (input: string, callback: any) => {
    if (!input) {
      callback({ options: [] });
    }
    fetchGithubUsers(input, callback);
  };

  return (
    <Row>
      <Col className='align-items-center'>
        <div data-testid={SearchBoxTestId.wrapper}>
          <AsyncSelect
            placeholder='Search for a Github User...'
            className='search-box'
            loadOptions={loadOptions}
            defaultOptions={options}
          />
        </div>
      </Col>
    </Row>
  );
};
