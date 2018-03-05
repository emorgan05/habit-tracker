function habitsReducer(state = { loading: false, habits: [] }, action) {
  switch(action.type) {
    case 'LOADING_HABITS':
      return Object.assign({}, state, {loading: true});
    case 'FETCH_HABITS':
      return { loading: false, habits: action.payload };
    default:
      return state;
  }
}

export default habitsReducer;
