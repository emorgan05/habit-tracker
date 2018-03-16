import fetch from 'isomorphic-fetch';

export function fetchHabits() {
  return (dispatch) => {
    dispatch({type: 'LOADING_HABITS'});
    return fetch('http://localhost:3001/habits')
      .then(response => {
        return response.json();
      }).then(habits => {
        return dispatch({ type: 'FETCH_HABITS', payload: habits });
      });
  };
}
