import React from 'react';
import StarsList from './StarsList';

const HabitListItem = ({habit, onHabitSelect}) => {
  return (
    <li onClick={() => onHabitSelect(habit)}>
      {habit.name}
      {/* <StarsList habit={habit} /> */}
    </li>
  )
}

export default HabitListItem
