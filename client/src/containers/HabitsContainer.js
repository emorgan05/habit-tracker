import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import HabitsList from './HabitsList';
import HabitDetails from '../components/HabitDetails';
import AddHabit from './AddHabit';

const HabitsContainer = ({ match, habits }) => {
  return (
    <div className="App">
      <HabitsList />
      <Switch>
        <Route path={`${match.url}/new`} component={AddHabit} />
        <Route path={`${match.url}/:habitId`} component={HabitDetails} />
        <Route exact path={match.url} render={() => (<p>Select a habit to view details</p>)} />
      </Switch>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    habits: state.habits.habits
  }
}

export default connect(mapStateToProps)(HabitsContainer);
