import { combineReducers } from 'redux';
import todosReducer from './todos/reducer';
import authReducer from './authentication/reducer';

const rootReducer = combineReducers({
  todos: todosReducer,
  auth: authReducer
});

export default rootReducer;
