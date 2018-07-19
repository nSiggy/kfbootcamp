// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

let div = document.createElement('div');

if (document.body) {
  document.body.appendChild(div);
}

ReactDOM.render(<App />, div);
