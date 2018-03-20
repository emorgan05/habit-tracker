import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import FaPlusSquareO from 'react-icons/lib/fa/plus-square';
import { Container, Col, Row } from 'reactstrap';

import HabitListItem from '../components/HabitListItem';
import { fetchHabits } from '../actions/habitActions';

class HabitsList extends Component {

  componentDidMount() {
    this.props.fetchHabits();
  }

  render() {
    if(!this.props.habits) {
      return (<h3>Loading...</h3>);
    }

    const habitListItems = this.props.habits.map((habit, index) => {
        return (
          <HabitListItem
            key={index}
            habit={habit}
          />
        )
      }
    );

    return (
      <Container>
        <Row>
          <Col xs="6">
            <div className="habits-list">
              <ul>
                {habitListItems}
              </ul>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs="6">
            <div>
              <Link to="/habits/new" exact="true">
                <FaPlusSquareO />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(HabitsList);
