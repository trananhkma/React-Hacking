import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import { NavLink } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Hacking</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <NavLink className="App-link" to="/ps">Homework 1: PropsState</NavLink>
      </header>
    </div>
  );
}

export default App;
