import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import HabitsList from './HabitsList';
import HabitDetails from './HabitDetails';
import AddHabit from './AddHabit';

const HabitsContainer = ({ match, habits, logged_in }) => {
  return (
    <Container>
      <Row>
        <Col xs="6">
          {logged_in && <HabitsList />}
        </Col>
        <Col xs="6">
          <Switch>
            <Route path={`${match.url}/new`} component={AddHabit} />
            <Route path={`${match.url}/:habitId`} component={HabitDetails} />
            <Route exact path={match.url} render={() => (<p>Select a habit to view details</p>)} />
          </Switch>
        </Col>
      </Row>
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    logged_in: state.session,
    habits: state.habits.habits
  }
}

export default connect(mapStateToProps)(HabitsContainer);
