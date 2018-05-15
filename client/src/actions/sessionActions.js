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
      })
      .catch(error => {
        throw(error);
      });
  };
}
