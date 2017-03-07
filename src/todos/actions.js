import * as t from './actionTypes';

export const startAdd = todo => ({
  type: t.START_ADD,
  payload: todo
});

export const addTodo = todo => ({
  type: t.ADD_TODO,
  payload: todo
});

export const toggleTodo = id => ({
  type: t.TOGGLE_TODO,
  payload: id
});

export const removeTodo = id => ({
  type: t.REMOVE_TODO,
  payload: id
});

export const setTodos = todos => ({
  type: t.SET_TODOS,
  payload: todos
});
