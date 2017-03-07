import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import uuid from 'node-uuid';
import Todo from './Todo';
import InputBar from '../../components/InputBar';
// import * as api from '../api';
import { getTodos } from '../selectors';
import { addTodo, toggleTodo, removeTodo } from '../actions';

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
    this.props.addTodo(todo);
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
              onToggleTodo={this.props.toggleTodo}
              onRemoveTodo={this.props.removeTodo}
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
  bindActionCreators({ addTodo, toggleTodo, removeTodo }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
