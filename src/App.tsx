import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import { List } from './components/List/List';
import { SearchBox } from './components/SearchBox/SearchBox';

export const App: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <div className='App'>
      <Container>
        <Row>
          <Col>
            <h1>List Repositories by Github Users Sorted by Star Count</h1>
          </Col>
        </Row>
        <SearchBox setSelectedValue={setSelectedValue} />

        <List selectedValue={selectedValue} />
      </Container>
    </div>
  );
};
