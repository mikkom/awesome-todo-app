import React, { Component } from 'react';
import Header from './components/Header';
import Todos from './todos/Todos';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Todos />
      </div>
    );
  }
}

export default App;
