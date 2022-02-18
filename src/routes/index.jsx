import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import App from '../App';
import Game from '../pages/Game';
import NotFound from '../pages/NotFound';
import Settings from '../pages/Settings';

function RoutesApp() {
  return (
    <Switch>
      <Route exact path="/" component={ App } />
      <Route exact path="/game" component={ Game } />
      <Route exact path="/settings" component={ Settings } />
      <Route path="*" component={ NotFound } />
    </Switch>
  );
}

export default withRouter(RoutesApp);
