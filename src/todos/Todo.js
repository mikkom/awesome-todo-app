import React from 'react';
import classNames from 'classnames';
import './Todo.css';

const Todo = ({ todo, onToggleTodo }) => (
  <li className={classNames('list-group-item', { done: todo.done })}>
    {todo.name}
    <span className='pull-right btn-group'>
      <button
        type="button"
        className="btn btn-success btn-xs glyphicon glyphicon-ok"
        onClick={() => onToggleTodo(todo.id)}>
      </button>
      <button
        type="button"
        className="btn btn-danger btn-xs glyphicon glyphicon-remove"
        onClick={() => {}}>
      </button>
    </span>
  </li>
);

export default Todo;
