import React, { Component } from 'react';

import MakePost from './makePost';
import PhotoVideoAlbum from './photoVideoAlbum';
import LiveVideo from './liveVideo';

export default class TopBar extends Component {

  render() {
    return (
        <div className='top'>
            <div className='top_bar'>
                <MakePost className='makePost' />
                <PhotoVideoAlbum className='photoVideoAlbum' />
                <LiveVideo className='liveVideo' />
            </div>
        </div>
    );
  }
}