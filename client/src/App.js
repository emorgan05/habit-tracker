import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Navigation from './components/Navigation';
import HabitsList from './components/HabitsList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: '',
      habits: [],
    }
  }

  render() {
    return (
      <div className="App">
        <Navigation user={this.state.user} />
        <Container>
          <Row>
            <Row>
              <Col xs="6">
                <HabitsList habits={this.state.habits} />
              </Col>
            </Row>

          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
