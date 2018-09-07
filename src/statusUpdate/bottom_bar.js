import React, { Component } from 'react';

import PhotoVideo from './photoVideo';
import FeelingActivity from './feelingActivity';
import Other from './other';

export default class BottomBar  extends Component {

  render() {
    return (
      <div className='bottom'>
        <div className='bottom_bar'>
            <PhotoVideo />
            <FeelingActivity />
            <Other /> 
        </div>  
      </div>
    );
  }
}