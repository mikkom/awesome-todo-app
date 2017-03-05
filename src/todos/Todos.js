import React, { Component } from 'react';
import Todo from './Todo';
import InputBar from '../components/InputBar';

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
      <div className="form-group">
        <InputBar />
        <ul className="list-group">
          {todos.map((todo, i) => <Todo key={i} todo={todo} />)}
        </ul>
      </div>
    );
  }
}

export default Todos;
