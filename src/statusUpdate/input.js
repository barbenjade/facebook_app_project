import React, { Component } from 'react';

export default class Input extends Component {
//   constructor() {
//     super()
//   }

  render() {
    return (
      <div className='input'>
        <input className='text_box' type="text" placeholder="What's on your mind, Teren?" />
      </div>
    );
  }
}