export function fetchHabits() {
  return(dispatch) => {
    dispatch({type: 'START_HABITS_REQUEST'});
    return fetch('http://localhost:3001/habits')
      .then(response => response.json())
      .then(habits => dispatch({ type: 'ADD_HABITS', habits }));
  };
}
