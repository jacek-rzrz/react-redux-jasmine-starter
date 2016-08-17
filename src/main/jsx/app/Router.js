import React from 'react';
import App from 'app/App';
import Counter from 'counter/Counter';
import { Router, Route, hashHistory } from 'react-router';

export default (() => (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/counter" component={Counter} />
    </Route>
  </Router>
));
