import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './LandingPage';
// import Signup from './signup';
// import Login from './Login';



const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    {/* <Route path="/Signup" component={Signup} />
    <Route path="/Login" component={Login} /> */}

  </Switch>
)

export default Main;
