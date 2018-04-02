import { combineReducers } from 'redux';
import sessionReducer from './sessionReducer';
import { habitReducer } from './habitReducer';
import { starReducer } from './starReducer';
// import all the other reducers

const appReducer = combineReducers({
  session: sessionReducer,
  habits: habitReducer,
  stars: starReducer
  // name reducers
});

const rootReducer = (state, action) => {
  if (action.type === 'LOG_OUT') {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer;
