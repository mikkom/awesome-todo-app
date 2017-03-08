import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { login } from '../actions';

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
        {
          !authenticated &&
          <button
            type="button"
            className="btn btn-success"
            onClick={this.props.login}>
            Kirjaudu sisään
          </button>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({login}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
