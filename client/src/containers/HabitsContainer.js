import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import FaPlusSquareO from 'react-icons/lib/fa/plus-square';

import HabitsList from './HabitsList';
import HabitDetails from '../components/HabitDetails';
import AddHabit from './AddHabit';
import { fetchHabits } from '../actions/habitActions';

class HabitsContainer extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col xs="6">
              <HabitsList fetchHabits={this.props.fetchHabits} habits={this.props.habits} />
            </Col>
            <Col xs="6">
              <HabitDetails />
            </Col>
          </Row>
          <Row>
            <Col xs="6">
              <Link to="/habits/new" exact="true">
                <FaPlusSquareO />
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    habits: state.habits.habits
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchHabits: bindActionCreators(fetchHabits, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HabitsContainer);
