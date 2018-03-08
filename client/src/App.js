import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import FaPlusSquareO from 'react-icons/lib/fa/plus-square';

import Navigation from './components/Navigation';
import HabitsList from './components/HabitsList';
import AddHabit from './components/AddHabit';
import HabitDetails from './components/HabitDetails';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: 'a@email.com',
      add: false,
      selectedHabit: {
          name: "Run",
          description: "Run 4 miles",
          number_of_days: 3,
          category: {
            id: 3,
            title: 'Fitness',
          },
          stars: [
            { id: 1,
              date: new Date(2018,3,5),
              completed: true,
            },
            { id: 2,
              date: new Date(2018,3,6),
              completed: false,
            },
            { id: 3,
              date: new Date(2018,3,7),
              completed: true,
            },
            { id: 4,
              date: new Date(2018,3,8),
              completed: true,
            },
          ]
        },
      habits: [
        { name: "Run",
          description: "Run 4 miles",
          number_of_days: 3,
          category: {
            id: 3,
            title: 'Fitness',
          },
          stars: [
            { id: 1,
              date: new Date(2018,3,5),
              completed: true,
            },
            { id: 2,
              date: new Date(2018,3,6),
              completed: false,
            },
            { id: 3,
              date: new Date(2018,3,7),
              completed: true,
            },
            { id: 4,
              date: new Date(2018,3,8),
              completed: true,
            },
          ]
        },
        { name: "Meditate",
          description: "Breathing meditation for 10 minutes",
          number_of_days: 7,
          category: {
            id: 7,
            title: 'Spiritual',
          },
          stars: [
            { id: 1,
              date: new Date(2018,3,5),
              completed: true,
            },
            { id: 2,
              date: new Date(2018,3,6),
              completed: false,
            },
            { id: 3,
              date: new Date(2018,3,7),
              completed: true,
            },
            { id: 4,
              date: new Date(2018,3,8),
              completed: true,
            },
          ]
        }
      ],
    }
  }

  render() {
    return (
      <div className="App">
        <Navigation user={this.state.user} />
        <Container>
          <Row>
            <Col xs="6">
              <HabitsList habits={this.state.habits} />
            </Col>
            <Col xs="6">
              <HabitDetails selectedHabit={this.state.selectedHabit}/>
            </Col>
          </Row>
          <Row>
            <Col xs="6">
              <FaPlusSquareO onClick={(event) => { this.state.add === true ? this.setState({ add: false }) : this.setState({ add: true }) }}/>
              {this.state.add === true ? <AddHabit /> : <div></div>}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
