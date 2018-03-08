import React from 'react';

const HabitListItem = ({habit}) => {
  return (
    <li>{habit.name} -- {habit.stars}</li>
  )
}

export default HabitListItem
