import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import TodoContainer from "./components/TodoContainer"

// css
import "./App.css"

ReactDOM.render(
  <React.StrictMode>
    <HashRouter><TodoContainer /></HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
