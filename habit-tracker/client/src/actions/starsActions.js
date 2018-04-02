import StarsApi from '../api/starsApi';

export function createStar(star) {
  return (dispatch) => {
    return StarsApi.createNewStar(star)
      .then(response => {
        return dispatch({ type: 'CREATE_STAR', payload: response});
      });
  };
}
