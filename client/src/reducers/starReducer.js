export function starReducer(state=[], action) {
  switch (action.type) {
    case 'CREATE_STAR':
      return Object.assign({}, state, [].concat(state.stars, action.payload));

    default:
      return state;
  }
}
