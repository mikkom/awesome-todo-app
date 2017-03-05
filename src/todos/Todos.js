import React, { Component } from 'react';
import Todo from './Todo';
import InputBar from '../components/InputBar';

let latestId = 1;

const todos = [{
  id: latestId++,
  name: 'Do the laundry',
  done: false
}, {
  id: latestId++,
  name: 'Wash the dishes',
  done: true
}, {
  id: latestId++,
  name: 'Take out the dog',
  done: false
}];

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos
    }
  }

  addTodo = name => {
    const todo = {
      id: latestId++,
      name,
      done: false
    };
    const todos = [...this.state.todos, todo];
    this.setState({ todos });
  }

  removeTodo = id => {
    const todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos });
  }

  toggleTodo = id => {
    const todo = this.state.todos.find(todo => todo.id === id);
    todo.done = !todo.done;
    this.setState({ todos });
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
