import React from 'react';

const HabitDetails = ({selectedHabit}) => {
  return (
    <div className="habit-details">
      <h5>Name: {selectedHabit.name}</h5>
      <h5>Description: {selectedHabit.description}</h5>
    </div>
  )
}

export default HabitDetails;
