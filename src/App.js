import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar.js';
import Home from './components/home.js';
// import Section2 from './components/section2.js';
import Section3 from './components/section3.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Home/>
        {/* <Section2/> */}
        <Section3/>
      </div>
    );
  }
}

export default App;
