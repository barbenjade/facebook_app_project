import React, { Component } from 'react';

import TopBar from './top_bar';
import Input from './input';
import BottomBar from './bottom_bar';


import './status_Update.css';





class StatusUpdate extends Component {
    render() {
      return (
        
        <div>

          <TopBar />

          <Input />

          <BottomBar />

        </div>
      );
    }
  }
  
  export default StatusUpdate;