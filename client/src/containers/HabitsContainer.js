import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import HabitsList from './HabitsList';
import HabitDetails from './HabitDetails';
import AddHabit from './AddHabit';

const HabitsContainer = ({ match, habits, logged_in }) => {

    return (
      <div className="App">
        {logged_in && <HabitsList />}
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
    logged_in: state.session,
    habits: state.habits.habits
  }
}

export default connect(mapStateToProps)(HabitsContainer);
