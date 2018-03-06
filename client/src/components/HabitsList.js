import React from 'react';

class HabitsList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // if (this.props.habits.length === 0) {
    //   this.props.fetchHabits();
    // }
    // this.props.fetchHabits();
  }
  
  render () {
    // const habits = this.props.habits.map(habit => <p>{habit.name}</p>);

    return (
      // {habits}
      <h1>Hello World</h1>
    )
  }
}

export default HabitsList;
