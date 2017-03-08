import React, { Component } from 'react';
import { Link } from 'react-router'

export class Welcome extends Component {
  render() {
    return (
      <div>
        <p>Welcome to Todo App</p>
        <Link to='/todos' className="btn btn btn-info">
          Go to todo-list
        </Link>
      </div>
    )
  }
}

export default Welcome;
