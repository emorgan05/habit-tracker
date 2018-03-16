import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import FaPlusSquareO from 'react-icons/lib/fa/plus-square';

import Navigation from './components/Navigation';
import HabitsList from './containers/HabitsList';
import AddHabit from './components/AddHabit';
import HabitDetails from './components/HabitDetails';
import LoginPage from './containers/LoginPage';
import SignupPage from './components/SignupPage';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      add: false,
      selectedHabit: null,
    }
  }

  addNewHabit(habit) {
    this.setState({
      habits: [...this.props.habits, habit]
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
    logged_in: state.session,
    habits: state.habits.habits
  }
}

export default connect(mapStateToProps)(App);
