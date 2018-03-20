import StarsApi from '../api/starsApi';

export function createStar(star) {
  return (dispatch) => {
    return HabitsApi.createNewStar(star)
      .then(response => {
        return dispatch({ type: 'CREATE_STAR', payload: response});
      });
  };
}
