import React from 'react';

const HabitDetails = ({selectedHabit}) => {
  if(selectedHabit) {
    return (
      <div className="habit-details">
        <p>Name: {selectedHabit.name}</p>
        <p>Description: {selectedHabit.description}</p>
        <p>Goal: I want to {selectedHabit.name.toLowerCase()} {selectedHabit.numberOfDays} times each week</p>
        <p>Category: {selectedHabit.category.title}</p>
      </div>
    )
  } else {
    return (<div></div>)
  }
}

export default HabitDetails;
