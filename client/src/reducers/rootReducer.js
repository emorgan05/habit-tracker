import { combineReducers } from 'redux';
import { habitsReducer } from './habitsReducer';
// import all the other reducers

const rootReducer = combineReducers({
  habits: habitsReducer
  // name reducers
});

export default rootReducer;
