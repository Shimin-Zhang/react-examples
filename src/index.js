import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Content from './Content';

ReactDOM.render(
  <React.StrictMode>
    <Content />
  </React.StrictMode>,
  // The WP version with shortcode
  // document.getElementById('calculator-root')
  // The development version with root
  document.getElementById('root')
);
