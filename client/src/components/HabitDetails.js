import React from 'react';

const HabitDetails = ({selectedHabit}) => {
  if(selectedHabit) {
    return (
      <div className="habit-details">
        <p>Name: {selectedHabit.name}</p>
        <p>Description: {selectedHabit.description}</p>
        <p>Goal: I want to {selectedHabit.name.toLowerCase()} {selectedHabit.number_of_days} times each week</p>
        <p>Category: {selectedHabit.category.title}</p>
      </div>
    )
  } else {
    return (<div></div>)
  }
}

export default HabitDetails;
