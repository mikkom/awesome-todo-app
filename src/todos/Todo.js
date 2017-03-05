import React from 'react';
import classNames from 'classnames';
import './Todo.css';

const Todo = ({ todo }) => (
  <li className={classNames('list-group-item', { done: todo.done })}>
    {todo.name}
  </li>
);

export default Todo;
