import React from 'react';

import { Link } from 'react-router-dom';

import './_menu-main.sass';

const MenuMain = (props) => (
  <ul className="menu-main">
    <li><Link to="/users">Users</Link></li>
    <li><Link to="/profile">Profile</Link></li>
  </ul>
)

export default MenuMain;
