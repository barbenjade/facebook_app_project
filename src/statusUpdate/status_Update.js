import React, { Component } from 'react';

import TopBar from './top_bar';
import PhotoVideo from './photoVideo';
import Input from './input';
import FeelingActivity from './feelingActivity';
import Other from './other';

import './status_Update.css';





class StatusUpdate extends Component {
    render() {
      return (
        
        <div>

          <TopBar />

          <Input />
          <PhotoVideo />
          <FeelingActivity />
          <Other />

        </div>
      );
    }
  }
  
  export default StatusUpdate;