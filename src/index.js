import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

import store from "./stores";


// import './services/axiosInterceptor';

import { applicationInit } from './services/axiosInterceptor';
applicationInit()(store.dispatch, store.getState)
 

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);