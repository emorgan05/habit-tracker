import { combineReducers } from 'redux';
import sessionReducer from './sessionReducer';
import { habitReducer } from './habitReducer';
// import all the other reducers

const rootReducer = combineReducers({
  session: sessionReducer,
  habit: habitReducer
  // name reducers
});

export default rootReducer;
