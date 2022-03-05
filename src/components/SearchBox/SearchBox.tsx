import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';
import { Row, Col } from 'react-bootstrap';
import './_searchBox.scss';

export const SearchBox: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (input: string) => {
    setInputValue(input);
  };

  return (
    <Row>
      <Col className='align-items-center'>
        <AsyncSelect
          placeholder='Search for a Github User...'
          className='search-box'
          cacheOptions
          loadOptions={() => [{ value: 'Test', name: 'Test' }]}
          defaultOptions={[]}
          onInputChange={handleChange}
          value={inputValue}
        />
      </Col>
    </Row>
  );
};
