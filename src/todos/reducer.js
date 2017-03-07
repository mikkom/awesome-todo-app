import * as t from './actionTypes';

export default (state = {}, action) => {
  switch(action.type) {
    case t.ADD_TODO: {
      const todo = action.payload;
      return { ...state, [todo.id]: todo };
    }
    case t.TOGGLE_TODO:
    case t.REMOVE_TODO:
    default:
      return state;
  }
}
