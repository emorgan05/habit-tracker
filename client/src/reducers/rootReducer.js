import { combineReducers } from 'redux';
import { habitsReducer } from './habitsReducer';
// import all the other reducers

const rootReducer = combineReducers({
  habitsReducer
  // name reducers
});

export default rootReducer;
