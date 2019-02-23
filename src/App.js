import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navBar.js';
import Home from './components/home.js';
import Section3 from './components/section3.js';
import Footer from './components/footer.js';
// import Timeline from './components/timeline.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Home/>
        <Section3/>
        {/* <Timeline/> */}
        <Footer/>
      </div>
    );
  }
}

export default App;
