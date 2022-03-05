import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import { SearchBox } from './components/SearchBox/SearchBox';

export const App: React.FC = () => (
  <div className='App'>
    <Container>
      <Row>
        <Col>
          <SearchBox />
        </Col>
      </Row>
    </Container>
  </div>
);
