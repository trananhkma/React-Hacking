import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import { NavLink } from "react-router-dom";
import {Home, HomeWork1, HomeWork2, HomeWork3, HomeWork5, Final}  from "../../config/urls"

function App(props) {
  return (
    <div className="App">
      <div class="flier">
        <img src={logo} class="App-logo" alt="logo" />
      </div>
      <header className="App-header">
        <h1>React Hacking</h1>
        <div class="pull-left">
          <NavLink activeClassName="activeX" className="App-link row" to={Home}>Home</NavLink>
          <NavLink className="App-link row" to={HomeWork1}>Homework 1: Clone Zing MP3 Playlist</NavLink>
          <NavLink className="App-link row" to={HomeWork2}>Homework 2 + 4: Call API with Axios</NavLink>
          <NavLink className="App-link row" to={HomeWork3}>Homework 3: How to deal with a girl</NavLink>
          <NavLink className="App-link row" to={HomeWork5}>Homework 5: Axios with Redux</NavLink>
          <NavLink className="App-link row" to={Final}>Final: TODO List using redux-saga</NavLink>
        </div>
      </header>
    </div>
  );
}

export default App;
