import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const HabitLiPres = ({habit_id, name, handleClick, likeHandleClick, counter}) => {
  return (
    <div className="habits-list-item">
      <Link key={habit_id} to={`/habits/${habit_id}`}>
        <li>
          {name}
        </li>
      </Link>
      <Button color="info" onClick={handleClick}>Completed?</Button>{' '}
      <Button color="primary" onClick={likeHandleClick}>Like</Button>
      {counter}
      {/*button with like or vote
      counter beside it that starts at 0
      on button click, counter increments up
      not connected to redux or api*/}
    </div>
  )
}

export default HabitLiPres;
