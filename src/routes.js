import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import Welcome from './Welcome';
import Todos from './todos/components/Todos';

export default (
  <Route path='/' component={App} >
    <IndexRoute component={Welcome} />
    <Route path='todos' component={Todos} />
  </Route>
);
