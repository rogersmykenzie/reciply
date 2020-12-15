import React from 'react';
import { Switch, Route } from 'react-router';
import LandingPage from './components/LandingPage/LandingPage';
import Auth from './components/Auth/Auth';

export default (
  <Switch>
    <Route path="/auth" component={Auth} />
    <Route path="/" component={LandingPage} />
  </Switch>
);
