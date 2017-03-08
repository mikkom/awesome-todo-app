import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import Welcome from './authentication/components/Welcome';
import Todos from './todos/components/Todos';
import requireAuth from './authentication/components/RequireAuthentication'

export default (
  <Route path='/' component={App} >
    <IndexRoute component={Welcome} />
    <Route path='todos' component={requireAuth(Todos)} />
  </Route>
);
