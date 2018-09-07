import React, { Component } from 'react';
import './App.css';
import Navigation from './navigation'
import Menu from './menu.js';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Menu />
      </div>
    );
  }
}

export default App;
