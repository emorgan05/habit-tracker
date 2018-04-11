import SessionApi from '../api/sessionApi';

export function loginSuccess() {
  return { type: 'LOG_IN_SUCCESS' }
}

export function loginUser(credentials) {
  return function(dispatch) {
    return SessionApi.login(credentials)
      .then(response => {
        sessionStorage.setItem('jwt', response.jwt);
        dispatch(loginSuccess());
      })
      .catch(error => {
        throw(error);
      });
  };
}

export function logOutUser() {
  sessionStorage.removeItem('jwt');
  return { type: 'LOG_OUT' }
}

export function createNewUser(credentials) {
  return (dispatch) => {
    return SessionApi.createUser(credentials)
      .then(response => {
        dispatch({ type: 'CREATE_USER', payload: response });
        return loginUser(credentials)
      });
      // .then(response => {
      //   dispatch()
      // })
  };
}

// function loadSomeThings() {
//     return dispatch => {
//         fetchFirstThingAsync.then(data => { // first API call
//             dispatch({ type: 'FIRST_THING_SUCESS', data }); // you can dispatch this action if you want to let reducers take care of the first API call
//             return fetchSecondThingAsync(data), // another API call with the data received from the first call that returns a promise
//         })
//         .then(data => {
//              dispatch({ type: 'SECOND_THING_SUCESS', data }); // the reducers will handle this one as its the object they are waiting for
//         });
//     };
// }
