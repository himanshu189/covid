import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import {userReducer} from "./redux/reducer";
import reduxthunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { HashRouter } from "react-router-dom";

export const store = createStore(
  userReducer,
  composeWithDevTools(applyMiddleware(reduxthunk))
  );
ReactDOM.render(

  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
    
   
  </React.StrictMode>,
  document.getElementById('root')
);
