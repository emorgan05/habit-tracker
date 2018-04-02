import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import HabitListItem from './HabitListItem';
import { fetchHabits } from '../actions/habitActions';
import HabitsListPres from '../components/HabitsListPres';

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
      <HabitsListPres habitLi={habitListItems} />
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
