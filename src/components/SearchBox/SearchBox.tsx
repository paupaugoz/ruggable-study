import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';
import { Row, Col } from 'react-bootstrap';
import './_searchBox.scss';
import _ from 'lodash';
import { getUser } from '../../api/Github/Github';
import { User } from '../../types/User';
import { SearchBoxTestId } from './TestId';
import { SearchBoxProps } from './_types';

export const SearchBox: React.FC<SearchBoxProps> = (props) => {
  const { setSelectedValue } = props;
  const [options, setOptions] = useState([]);

  // fetchGithubUsers is a debounced function that makes an API call to
  // getUser to retrieve a list of users that match the given input value
  const fetchGithubUsers = _.debounce(async (input, callback) => {
    // this should search for users and autosuggest results
    const { data, error } = await getUser(input);

    if (error) {
      // handle error
    }
    if (!data) return callback([]);
    const formattedOptions = data.items.map((user: User) => {
      const { login } = user;
      return { value: login, label: login };
    });
    setOptions(formattedOptions);
    callback(formattedOptions);
    return null;
  }, 1000);

  const loadOptions = (input: string, callback: any) => {
    if (!input) {
      callback({ options: [] });
    }
    fetchGithubUsers(input, callback);
  };

  const handleChange = (newValue: any) => {
    setSelectedValue(newValue.value);
  };

  return (
    <Row>
      <Col className='align-items-center' data-testid={SearchBoxTestId.wrapper}>
        <AsyncSelect
          placeholder='Search for a Github User...'
          className='search-box'
          loadOptions={loadOptions}
          defaultOptions={options}
          onChange={handleChange}
        />
      </Col>
    </Row>
  );
};
