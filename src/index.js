import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import LandingPage from './components/LandingPage'
import Transactions from "./components/Transactions";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/transactions" component={Transactions} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
