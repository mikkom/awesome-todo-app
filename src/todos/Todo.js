import React from 'react';
import classNames from 'classnames';
import './Todo.css';

const Todo = ({ todo, onToggleTodo }) => (
  <li
    className={classNames('list-group-item', { done: todo.done })}
    onClick={() => onToggleTodo(todo.id)}
  >
    {todo.name}
  </li>
);

export default Todo;
