import uuid from 'node-uuid';
import { call, put } from 'redux-saga/effects'
import * as a from './actions';
import { addTodoSaga } from './sagas';
import * as api from './api';

const todo = {
  id: '1',
  name: 'Beat the dead horse',
  done: true
};

test('addTodoSaga happy path', () => {
  const saga = addTodoSaga(a.startAdd(todo));
  expect(saga.next().value).toEqual(call(api.addTodo, todo));
  expect(saga.next(todo).value).toEqual(put(a.addTodo(todo)));
  expect(saga.next().done).toEqual(true);
});

test('addTodoSaga unhappy path', () => {
  const saga = addTodoSaga(a.startAdd(todo));
  expect(saga.next().value).toEqual(call(api.addTodo, todo));
  expect(saga.throw('error').done).toEqual(true);
});
