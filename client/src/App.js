import React, { Component } from 'react';
import Navigation from './components/Navigation';
import HabitsList from './components/HabitsList';
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Container>
          <Row>
            <Col xs="6">
              <HabitsList />
            </Col>
            <Col xs="6">
              <h1>Hello World</h1>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
