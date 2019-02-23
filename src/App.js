import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar.js';
import Home from './components/home.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Home/>
      </div>
    );
  }
}

export default App;
