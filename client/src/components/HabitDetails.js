import React from 'react';

const HabitDetails = ({selectedHabit}) => {
  return (
    <div className="habit-details">
      <p>{selectedHabit.name}</p>
      <p>{selectedHabit.description}</p>
    </div>
  )
}

export default HabitDetails;
