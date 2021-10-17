import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {state} from "./Redux/MyState";


ReactDOM.render(
  <React.StrictMode>
    <App {...state}/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
