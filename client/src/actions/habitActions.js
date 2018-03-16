import fetch from 'isomorphic-fetch';
import HabitsApi from '../api/habitsApi';

export function fetchHabits() {
  return (dispatch) => {
    dispatch({type: 'LOADING_HABITS'});
    return HabitsApi.getUserHabits()
      .then(response => {
        return dispatch({ type: 'FETCH_HABITS', payload: response.habits });
      });
  };
}
