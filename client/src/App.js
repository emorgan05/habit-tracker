import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import FaPlusSquareO from 'react-icons/lib/fa/plus-square';

import Navigation from './components/Navigation';
import HabitsList from './components/HabitsList';
import AddHabit from './components/AddHabit';
import HabitDetails from './components/HabitDetails';
import LoginPage from './containers/LoginPage';
import SignupPage from './components/SignupPage';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: '',
      add: false,
      selectedHabit: null,
      habits: [
        { name: "Run",
          description: "Run 4 miles",
          numberOfDays: 3,
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
          numberOfDays: 7,
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

  addNewHabit(habit) {
    this.setState({
      habits: [...this.state.habits, habit]
    })
  }

  render() {
    if (this.props.logged_in) {
      return (
        <div className="App">
          <Navigation logged_in={this.props.logged_in} />
          <Container>
            <Row>
              <Col xs="6">
                <HabitsList
                  habits={this.state.habits}
                  onHabitSelect={habit => this.setState({ selectedHabit: habit })}
                />
              </Col>
              <Col xs="6">
                <HabitDetails selectedHabit={this.state.selectedHabit}/>
              </Col>
            </Row>
            <Row>
              <Col xs="6">
                <FaPlusSquareO
                  onClick={(event) => { this.state.add === true ? this.setState({ add: false }) : this.setState({ add: true }) }}
                />
                {this.state.add === true ? <AddHabit onFormSubmit={habit => this.addNewHabit(habit)} /> : <div></div>}
              </Col>
            </Row>
          </Container>
        </div>
      );
    } else {
      return (
        <div className="App">
          <Navigation logged_in={this.props.logged_in}/>
          <Container>
            <Row>
              <Col xs="6">
                <LoginPage />
              </Col>
              <Col xs="6">
                <SignupPage />
              </Col>
            </Row>
          </Container>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    logged_in: state.session
  }
}

export default connect(mapStateToProps)(App);
