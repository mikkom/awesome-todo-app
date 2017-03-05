import React from 'react';
import { Link } from 'react-router'

const Welcome = () => {
  return (
    <div>
      <p>Welcome to Todo App</p>
      <Link to='/todos' className="btn btn btn-info">
        Go to todo-list
      </Link>
    </div>
  )
}

export default Welcome;
