import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { store } from './Store';







ReactDOM.render(  <Provider store={store}>  <App /> </Provider>   , document.getElementById("root"));
