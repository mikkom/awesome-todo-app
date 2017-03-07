import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import InputBar from '../../components/InputBar';
import * as api from '../api';
import { getTodos } from '../selectors';

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
    console.log('this.props.todos', this.props.todos);
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

const mapStateToProps = state => ({
  todos: getTodos(state)
});

export default connect(mapStateToProps)(Todos);
