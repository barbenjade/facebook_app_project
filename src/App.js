import React, { Component } from 'react';
import './App.css';
import Navigation from './navigation'

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
