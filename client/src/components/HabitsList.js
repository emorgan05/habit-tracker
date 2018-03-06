import React from 'react';
import App from '../App';

class HabitsList extends React.Component {

  render () {
    const habits = this.props.habits.map(habit => <p>{habit.name}</p>);

    return (
      {habits}
    )
  }
}

export default HabitsList;
