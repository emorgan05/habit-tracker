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
