import React from 'react';
import { Switch, Route } from 'react-router';
import LandingPage from './components/LandingPage/LandingPage';
import Auth from './components/Auth/Auth';
import Overview from './components/Overview/Overview';

export default (
  <Switch>
    <Route path="/auth" component={Auth} />
    <Route path="/overview" component={Overview} />
    <Route path="/" component={LandingPage} />
  </Switch>
);
