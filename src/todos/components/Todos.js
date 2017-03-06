import React, { Component } from 'react';
import Todo from './Todo';
import InputBar from '../../components/InputBar';
import * as api from '../api';

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    this.fetchTodos();
  }

  fetchTodos = () => api.getTodos().then(todos => this.setState({ todos }));

  addTodo = name => {
    const todo = {
      name,
      done: false
    };
    api.addTodo(todo).then(this.fetchTodos);
  }

  removeTodo = id => {
    api.deleteTodo(id).then(this.fetchTodos);
  }

  toggleTodo = id => {
    api.toggleTodo(id).then(this.fetchTodos);
  }

  render() {
    return (
      <div className="form-group">
        <InputBar onSubmit={this.addTodo} />
        <ul className="list-group">
          {this.state.todos.map(todo =>
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

export default Todos;
