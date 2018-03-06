import React from 'react';

class HabitsList extends React.Component {

  render () {
    const habits = this.props.habits.map(habit => <p>{habit.name}</p>);

    return (
      {habits}
    )
  }
}

export default HabitsList;
