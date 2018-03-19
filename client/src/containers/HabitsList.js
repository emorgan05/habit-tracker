import React, { Component } from 'react';
import HabitListItem from '../components/HabitListItem';

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
            key={habit.id}
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

export default HabitsList;
