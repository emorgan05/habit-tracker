import React from 'react';

const HabitListItem = ({habit, onHabitSelect}) => {
  return (
    <li onClick={() => onHabitSelect(habit)}>
      {habit.name}
    </li>
  )
}

export default HabitListItem
