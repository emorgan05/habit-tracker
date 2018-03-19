import React from 'react';
import { connect } from 'react-redux';

const HabitDetails = ({habit}) => {
  return (
    <div className="habit-details">
      <p>Name: {habit.name}</p>
      <p>Description: {habit.description}</p>
      <p>Goal: I want to {habit.name.toLowerCase()} {habit.number_of_days} times each week</p>
      <p>Category: {habit.category.title}</p>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const habit = state.habits.habits.find(habit => habit.id == ownProps.match.params.habitId)

  if(habit) {
    return { habit }
  } else {
    return { habit: {} }
  }
}

export default connect(mapStateToProps)(HabitDetails);
