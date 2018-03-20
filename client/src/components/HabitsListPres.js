import React from 'react';
import { Link } from 'react-router-dom';
import FaPlusSquareO from 'react-icons/lib/fa/plus-square';
import { Container, Col, Row } from 'reactstrap';

const HabitsListPres = ({habitLi}) => {
  return (
    <Container>
      <Row>
        <Col xs="6">
          <div className="habits-list">
            <ul>
              {habitLi}
            </ul>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs="6">
          <div>
            <Link to="/habits/new" exact="true">
              <FaPlusSquareO />
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default HabitsListPres;
