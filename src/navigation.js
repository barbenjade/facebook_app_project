import React from 'react';
import './navigation.css'

const Navigation = function() {
  return (
    <div className='navwrapper'>
        <div className='navwrapperleft'>
          <div className='facebook'>
            <i class="fab fa-facebook"></i>
          </div>
          <div className='textbox'>
            <input type='text' />
          </div>
          <div className='name'>
            <i class="fas fa-user-circle"></i>
            Name
          </div>
          <div className='home'>
            Home
          </div>
        </div>
        <div className='navwrapperright'>
          <div className='friends'>
            <i class="fas fa-user-friends"></i>
          </div>
          <div className='comments'>
            <i class="fas fa-comments"></i>
          </div>
          <div className='world'>
            <i class="fas fa-globe-americas"></i>
          </div>
          <div className='question'>
            <i class="fas fa-question-circle"></i>
          </div>
          <div className='downarrow'>
            <i class="fas fa-caret-down"></i>
          </div>
        </div>
    </div>
  );
}

export default Navigation;