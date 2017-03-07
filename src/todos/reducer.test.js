import * as a from './actions';
import reducer from './reducer';

const todo1 = {
  id: '1',
  name: 'Beat the dead horse',
  done: true
};

test('adds todo to empty list', () => {
  const action = a.addTodo(todo1);
  const state = reducer(undefined, action);
  expect(Object.keys(state).length).toBe(1);
  expect(state).toEqual({
    [todo1.id]: todo1
  })
});
