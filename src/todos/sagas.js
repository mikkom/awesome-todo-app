import { takeEvery, call, put } from 'redux-saga/effects';
import * as a from './actions';
import * as t from './actionTypes';
import * as api from './api';

export function* todoSaga(apiMethod, successAction, action) {
  try {
    const result = yield call(apiMethod, action.payload);
    yield put(successAction(result));
  } catch (err) {
    console.error('async op failed:', err);
  }
}

export function* watchTodoSagas() {
  yield [
    takeEvery(t.START_ADD, todoSaga, api.addTodo, a.addTodo),
    takeEvery(t.START_TOGGLE, todoSaga, api.toggleTodo, a.toggleTodo),
    takeEvery(t.START_REMOVE, todoSaga, api.deleteTodo, a.removeTodo)
  ];
}
