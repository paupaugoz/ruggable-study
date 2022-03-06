import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import { List } from './components/List/List';
import { SearchBox } from './components/SearchBox/SearchBox';

export const App: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState('');

  console.log('SELECTED VALUE: ', selectedValue);
  return (
    <div className='App'>
      <Container>
        <SearchBox setSelectedValue={setSelectedValue} />

        <List selectedValue={selectedValue} />
      </Container>
    </div>
  );
};
