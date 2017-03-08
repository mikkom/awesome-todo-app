import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import uuid from 'node-uuid';
import Todo from './Todo';
import InputBar from '../../components/InputBar';
import * as api from '../api';
import { getTodos } from '../selectors';
import {
  startAdd,
  startToggle,
  startRemove,
  setTodos
} from '../actions';

export class Todos extends Component {
  componentDidMount() {
    api.getTodos().then(this.props.setTodos);
  }

  addTodo = name => {
    const todo = {
      id: uuid.v4(),
      name,
      done: false
    };
    this.props.startAdd(todo);
  }

  render() {
    return (
      <div className="form-group">
        <InputBar onSubmit={this.addTodo} />
        <ul className="list-group">
          {this.props.todos.map(todo =>
            <Todo
              key={todo.id}
              todo={todo}
              onToggleTodo={this.props.startToggle}
              onRemoveTodo={this.props.startRemove}
            />
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: getTodos(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    startAdd,
    startToggle,
    startRemove,
    setTodos
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
