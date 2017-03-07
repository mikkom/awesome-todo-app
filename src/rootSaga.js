import { watchTodoSagas } from './todos/sagas';

export default function* rootSaga() {
  yield [
    watchTodoSagas()
  ];
}
