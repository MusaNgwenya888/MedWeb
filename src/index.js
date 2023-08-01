// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigatingPages from './NavigatingPages';

ReactDOM.render(
  <Router>
    <div className="app-wrapper">
      <NavigatingPages />
    </div>
  </Router>,
  document.getElementById('root')
);
