import React, { Component } from 'react';
import Todo from './Todo';

const todos = [{
  name: 'Do the laundry',
  done: false
}, {
  name: 'Wash the dishes',
  done: true
}, {
  name: 'Take out the dog',
  done: false
}];

class Todos extends Component {
  render() {
    return (
      <div>
        <ul className="list-group">
          {todos.map((todo, i) => <Todo key={i} todo={todo} />)}
        </ul>
      </div>
    );
  }
}

export default Todos;
