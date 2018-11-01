import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./redux/store";
// import Bootstrap from 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(
//     <BrowserRouter>
//   <App />
//     </BrowserRouter>
//     , document.getElementById('root'));