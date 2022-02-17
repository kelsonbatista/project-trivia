import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from '../App';
import Game from '../pages/Game';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ App } />
      <Route exact path="/game" component={ Game } />
    </Switch>
  );
}

export default Routes;
