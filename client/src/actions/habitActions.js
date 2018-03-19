import HabitsApi from '../api/habitsApi';

export function fetchHabits() {
  return (dispatch) => {
    dispatch({type: 'LOADING_HABITS'});
    return HabitsApi.getUserHabits()
      .then(response => {
        return dispatch({ type: 'FETCH_HABITS', payload: response });
      });
  };
}

export function createNewHabit(habit) {
  return (dispatch) => {
    return HabitsApi.createHabit(habit)
      .then(response => {
        return dispatch({ type: 'CREATE_HABIT', payload: response });
      });
  };
}

export function createStar(star) {
  return (dispatch) => {
    return HabitsApi.createNewStar(star)
      .then(response => {
        return dispatch({ type: 'CREATE_STAR', payload: response});
      });
  };
}
