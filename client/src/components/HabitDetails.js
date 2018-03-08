import React from 'react';

const HabitDetails = ({selectedHabit}) => {
  if(selectedHabit) {
    return (
      <div className="habit-details">
        <p>Name: {selectedHabit.name}</p>
        <p>Description: {selectedHabit.description}</p>
      </div>
    )
  } else {
    return (<div></div>)
  }
}

export default HabitDetails;
