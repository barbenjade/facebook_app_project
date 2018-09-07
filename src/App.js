import React, { Component } from 'react';
import logo from './logo.svg';
import Menu from './menu.js';
import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
      </div>
    );
  }
}

export default App;
