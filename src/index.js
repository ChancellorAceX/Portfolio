import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/Components/App/App.js';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
