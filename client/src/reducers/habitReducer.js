import initialState from './initialState';

export function habitReducer(state = initialState, action) {
  switch(action.type) {
    case 'LOADING_HABITS':
      return Object.assign({}, state, {loading: true});
    case 'FETCH_HABITS':
      return Object.assign({}, state, {loading: false, habits: [].concat(state.habits, action.payload) });
    default:
      return state;
  }
}
