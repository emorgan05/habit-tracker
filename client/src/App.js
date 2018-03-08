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
            <Row>
              <Col xs="6">
                <HabitsList />
              </Col>
            </Row>
            <Row>
              <Col xs="6">
                <AddHabit />
              </Col>
            </Row>
            <Col xs="6">
              <HabitDetails />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}


export default App;
