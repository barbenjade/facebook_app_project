import React, {Component} from 'react';
import logo from './logo.svg';
import './menu.css';


class Menu extends Component {
  render () {
    return (
      <div className="menu_main">
        <h3>Name</h3>
        <ul id="main_ul">
          <li className="list-group-item"><i class="far fa-newspaper"></i>News Feed</li>
          <li className="list-group-item"><i class="fab fa-facebook-messenger"></i>Messenger</li>
          <li className="list-group-item"><i class="fab fa-youtube-square"></i>Watch</li>
          <li className="list-group-item"><i class="fas fa-warehouse"></i>Marketplace</li>
        </ul>
        <h3>Shortcuts</h3>
        <ul id="shortcuts">
          <li className="list-group-item"><i class="fas fa-user-friends"></i>Group1</li>
          <li className="list-group-item"><i class="fas fa-user-friends"></i>Group2</li>
          <li className="list-group-item"><i class="fas fa-layer-group"></i>Group3</li>
          <li className="list-group-item"><i class="fas fa-layer-group"></i>Group4</li>
        </ul>
        <h3>Explore</h3>
        <ul id="explore">
          <li className="list-group-item"><i class="fas fa-calendar-alt"></i>Events</li>
          <li className="list-group-item"><i class="fas fa-user-friends"></i>Groups</li>
          <li className="list-group-item"><i class="fas fa-flag-checkered"></i>Pages</li>
          <li className="list-group-item"><i class="fas fa-coins"></i>Fundraisers</li>
          <li className="list-group-item"><i class="fas fa-user-alt"></i>

Friend List</li>
        </ul>
      </div>
    )
  }
}


export default Menu;
