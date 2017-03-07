import * as t from './actionTypes';

export default (state = {}, action) => {
  switch(action.type) {
    case t.ADD_TODO: {
      const todo = action.payload;
      return { ...state, [todo.id]: todo };
    }
    case t.TOGGLE_TODO: {
      const id = action.payload;
      const todo = state[id];
      const toggledTodo = { ...todo, done: !todo.done };
      return { ...state, [todo.id]: toggledTodo };
    }
    case t.REMOVE_TODO: {
      const id = action.payload;
      const { [id]: removedTodo, ...rest } = state;
      return rest;
    }
    default:
      return state;
  }
}
