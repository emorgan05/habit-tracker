import React from 'react';
import { Link } from 'react-router-dom';
import FaCircleO from 'react-icons/lib/fa/circle-o';
// import StarsList from './StarsList';

const HabitListItem = ({habit}) => {
  return (
    <Link key={habit.id} to={`/habits/${habit.id}`}>
      <li>
        {habit.name}
        {/* <FaCircleO onClick={this.props.handleClick}/> */}
        {/* <StarsList habit={habit} /> */}
      </li>
    </Link>
  )
}

export default HabitListItem;
