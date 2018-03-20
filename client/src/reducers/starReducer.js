export function starReducer(state=[], action) {
  switch (action.type) {
    case 'CREATE_STAR':
      return [].concat(state, action.payload);

    default:
      return state;
  }
}
