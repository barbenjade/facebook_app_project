import React, { Component } from 'react';
import './App.css';
import StatusUpdate from './statusUpdate/status_Update';
import Navigation from './navigation'
import Menu from './menu.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
      <div className="join">
        <Menu />
         <StatusUpdate />
      </div>
      </div>
    );
  }
}

export default App;
