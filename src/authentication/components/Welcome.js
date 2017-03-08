import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'

export class Welcome extends Component {
  render() {
    const { authenticated } = this.props;
    return (
      <div>
        <p>Welcome to Todo App</p>
        {
          authenticated &&
          <Link to='/todos' className="btn btn btn-info">
            Go to todo-list
          </Link>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
});

export default connect(mapStateToProps, {})(Welcome);
