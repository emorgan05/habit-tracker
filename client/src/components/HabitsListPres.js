import React from 'react';
import { Link } from 'react-router-dom';
import FaPlusSquareO from 'react-icons/lib/fa/plus-square';
import { Container, Col, Row } from 'reactstrap';

const HabitsListPres = ({habitLi}) => {
  return (
    <div className="habits-list">
      <p>
        Habits
        <Link to="/habits/new" exact="true">
          <FaPlusSquareO /> Add
        </Link>
      </p>
      <ul>
        {habitLi}
      </ul>
    </div>

  )
}

export default HabitsListPres;
