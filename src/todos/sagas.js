import { takeEvery, call, put } from 'redux-saga/effects';
import * as a from './actions';
import * as t from './actionTypes';
import * as api from './api';

export function* addTodoSaga(action) {
  try {
    const result = yield call(api.addTodo, action.payload);
    yield put(a.addTodo(result));
  } catch (err) {
    console.error('async op failed:', err);
  }
}

export function* watchTodoSagas() {
  yield [
    takeEvery(t.START_ADD, addTodoSaga)
  ];
}
