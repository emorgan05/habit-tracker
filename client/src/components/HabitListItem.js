import React from 'react';
import { Link } from 'react-router-dom';
// import StarsList from './StarsList';

const HabitListItem = ({habit}) => {
  return (
    <Link key={habit.id} to={`/habits/${habit.id}`}>
      <li>
        {habit.name}
        {/* <StarsList habit={habit} /> */}
      </li>
    </Link>
  )
}

export default HabitListItem;
