import * as a from './actions';
import reducer from './reducer';

const todo1 = {
  id: '1',
  name: 'Beat the dead horse',
  done: true
};

const todo2 = {
  id: '2',
  name: 'Have some lunch',
  done: false
};

test('adds todo to empty list', () => {
  const action = a.addTodo(todo1);
  const state = reducer(undefined, action);
  expect(Object.keys(state).length).toBe(1);
  expect(state).toEqual({
    [todo1.id]: todo1
  })
});

test('adds todo to non-empty list', () => {
  let state = reducer(undefined, a.addTodo(todo1));
  state = reducer(state, a.addTodo(todo2));
  expect(Object.keys(state).length).toBe(2);
  expect(state).toEqual({
    [todo1.id]: todo1,
    [todo2.id]: todo2
  })
});

test('toggles todo', () => {
  let state = reducer(undefined, a.addTodo(todo1));
  state = reducer(state, a.toggleTodo(todo1.id));
  expect(Object.keys(state).length).toBe(1);
  expect(state).toEqual({
    [todo1.id]: { ...todo1, done: !todo1.done }
  })
});

test('removes todo', () => {
  let state = reducer(undefined, a.addTodo(todo1));
  state = reducer(state, a.removeTodo(todo1.id));
  expect(Object.keys(state).length).toBe(0);
});

test('removes todo from two-element list', () => {
  let state = reducer(undefined, a.addTodo(todo1));
  state = reducer(state, a.addTodo(todo2));
  state = reducer(state, a.removeTodo(todo1.id));
  expect(Object.keys(state).length).toBe(1);
  expect(state).toEqual({
    [todo2.id]: todo2
  })
});
