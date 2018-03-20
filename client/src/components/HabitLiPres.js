import React from 'react';
import { Link } from 'react-router-dom';
import FaCircleO from 'react-icons/lib/fa/circle-o';

const HabitLiPres = ({habit_id, name, handleClick}) => {
  return (
    <div className="habits-list-item">
      <Link key={habit_id} to={`/habits/${habit_id}`}>
        <li>
          {name}
        </li>
      </Link>
      <p><FaCircleO onClick={handleClick}/> Completed?</p>
    </div>
  )
}

export default HabitLiPres;
