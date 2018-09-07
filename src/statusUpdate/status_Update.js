import React, { Component } from 'react';

import MakePost from './makePost';
import PhotoVideo from './photoVideo';
import PhotoVideoAlbum from './photoVideoAlbum';
import LiveVideo from './liveVideo';
import Input from './input';
import FeelingActivity from './feelingActivity';
import Other from './other';




class StatusUpdate extends Component {
    render() {
      return (
        
        <div>

          <MakePost />
          <PhotoVideoAlbum />
          <LiveVideo />
          <Input />
          <PhotoVideo />
          <FeelingActivity />
          <Other />

        </div>
      );
    }
  }
  
  export default StatusUpdate;