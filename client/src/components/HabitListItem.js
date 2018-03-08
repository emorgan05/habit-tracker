import React from 'react';

const HabitListItem = ({habit}) => {
  return (
    <li>
      {habit.name}
    </li>
  )
}

export default HabitListItem
