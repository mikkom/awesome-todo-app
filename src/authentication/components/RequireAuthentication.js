import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../rootReducer';

const RequireAuthentication = (ComposedComponent) => {
  class Authentication extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    };

    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.push('/');
      }
    }

    componentWillUpdate(nextProps: Props) {
      if (!nextProps.authenticated) {
        this.context.router.push('/');
      }
    }

    render() {
      return this.props.authenticated ?
        <ComposedComponent {...this.props} /> : null;
    }
  }

  const mapStateToProps = (state) => ({
    authenticated: state.auth.authenticated
  });
  return connect(mapStateToProps)(Authentication);
};

export default RequireAuthentication;
