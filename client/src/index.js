import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // Make sure App is imported correctly
import { BrowserRouter as Router } from 'react-router-dom'; // Wrap App with Router

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
