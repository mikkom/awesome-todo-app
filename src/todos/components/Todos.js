import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'node-uuid';
import Todo from './Todo';
import InputBar from '../../components/InputBar';
// import * as api from '../api';
import { getTodos } from '../selectors';
import * as a from '../actions';

class Todos extends Component {
  /*
  componentDidMount() {
    this.fetchTodos();
  }

  fetchTodos = () => api.getTodos().then(todos => this.setState({ todos }));
  */

  addTodo = name => {
    const todo = {
      id: uuid.v4(),
      name,
      done: false
    };
    this.props.dispatch(a.addTodo(todo));
  }

  removeTodo = id => {
    this.props.dispatch(a.removeTodo(id));
  }

  toggleTodo = id => {
    this.props.dispatch(a.toggleTodo(id));
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
              onToggleTodo={this.toggleTodo}
              onRemoveTodo={this.removeTodo}
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

export default connect(mapStateToProps)(Todos);
