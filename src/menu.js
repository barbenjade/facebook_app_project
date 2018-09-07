import React, {Component} from 'react';
import logo from './logo.svg';
import './menu.css';

class Menu extends Component {
  render () {
    return (
      <div className="menu_main">
        <h3>Name</h3>
        <ul id="main_ul">
          <li>News Feed</li>
          <li>Messenger</li>
          <li>Watch</li>
          <li>Marketplace</li>
        </ul>
        <h3>Shortcuts</h3>
        <ul id="shortcuts">
          <li>Group1</li>
          <li>Group2</li>
          <li>Group3</li>
          <li>Group4</li>
        </ul>
        <h3>Explore</h3>
        <ul id="explore">
          <li>Events</li>
          <li>Groups</li>
          <li>Pages</li>
          <li>Fundraisers</li>
          <li>Friend List</li>
        </ul>
      </div>
    )
  }
}


export default Menu;
