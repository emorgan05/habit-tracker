import { combineReducers } from 'redux';
import sessionReducer from './sessionReducer';
import { habitsReducer } from './habitsReducer';
// import all the other reducers

const rootReducer = combineReducers({
  session: sessionReducer,
  habits: habitsReducer
  // name reducers
});

export default rootReducer;
