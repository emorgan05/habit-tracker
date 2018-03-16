import { combineReducers } from 'redux';
import sessionReducer from './sessionReducer';
import { habitReducer } from './habitReducer';
// import all the other reducers

const rootReducer = combineReducers({
  session: sessionReducer,
  habits: habitReducer
  // name reducers
});

export default rootReducer;
