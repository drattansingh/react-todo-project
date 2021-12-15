import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import TodoContainer from "./components/TodoContainer"

// css
import "./App.css"

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}><TodoContainer /></Router>
  </React.StrictMode>,
  document.getElementById('root')
);
