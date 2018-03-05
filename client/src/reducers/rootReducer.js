import { combineReducers } from 'redux';
import HabitsReducer from './habitsReducer';
// import all the other reducers

const rootReducer = combineReducers({
  HabitsReducer
  // name reducers
});

export default rootReducer;
