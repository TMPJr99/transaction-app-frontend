import React from 'react';
import { Switch, Route } from 'react-router-dom';

import TopNav from './TopNav';
import Login from './Login'



const Main = () => (
  <Switch>
    <Route exact path="/" component={Login} />
   
  </Switch>
)

export default Main;