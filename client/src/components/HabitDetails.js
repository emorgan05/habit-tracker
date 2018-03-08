import React from 'react';

const HabitDetails = ({selectedHabit}) => {
  return (
    <div className="habit-details">
      <p>Name: {selectedHabit.name}</p>
      <p>Description: {selectedHabit.description}</p>
    </div>
  )
}

export default HabitDetails;
