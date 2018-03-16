import React, { Component } from 'react';
import { connect } from 'react-redux';
import HabitListItem from './HabitListItem';

class HabitsList extends Component {
  render() {
    if(!this.props.habits) {
      return (<h3>Loading...</h3>);
    }

    const habitListItems = this.props.habits.map((habit, index) => {
        return (
          <HabitListItem
            onHabitSelect={this.props.onHabitSelect}
            key={index}
            habit={habit}
          />
        )
      }
    );

    return (
      <div className="habits-list">
        <ul>
          {habitListItems}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    habits: state.habits
  }
}

export default connect(mapStateToProps)(HabitsList);
