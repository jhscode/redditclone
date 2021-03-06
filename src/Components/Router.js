import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import MakePost from './MakePost';
import NotFound from './NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/post" component={MakePost} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
