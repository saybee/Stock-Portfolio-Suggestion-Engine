import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Main from './components/Main';

function App() {
  return (
    <BrowserRouter>
      <Main/>
      </BrowserRouter>

  );
}

export default App;
