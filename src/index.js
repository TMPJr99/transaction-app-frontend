import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import LandingPage from "./components/LandingPage"


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={LandingPage} />
      </Switch>
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);