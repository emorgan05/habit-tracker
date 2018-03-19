import initialState from './initialState';

export default function sessionReducer(state = initialState.session, action) {
  switch(action.type) {
    case 'LOG_IN_SUCESS':
      //
      return !!sessionStorage.jwt
    case 'LOG_OUT':
      return !!sessionStorage.jwt
    default:
      return state;
  }
}
