import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import { NavLink } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <div class="flier">
        <img src={logo} class="App-logo" alt="logo" />
      </div>
      <header className="App-header">
        <h1>React Hacking</h1>
        <div class="pull-left">
          <NavLink className="App-link row" to="/hack1">Homework 1: Clone Zing MP3 Playlist</NavLink>
          <NavLink className="App-link row" to="/hack2">Homework 2: Call API with Axios</NavLink>
          <NavLink className="App-link row" to="/hack3">Homework 3: How to deal with a girl</NavLink>
        </div>
      </header>
    </div>
  );
}

export default App;
