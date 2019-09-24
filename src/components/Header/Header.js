import React from 'react';

import Logo from '../Logo/Logo'
import MenuMain from '../MenuMain/MenuMain'

import './_header.sass';

const Header = (props) => (
  <header className="header">
    <div className="container">
      <div className="header__inner">
        <Logo />

        <MenuMain />
      </div>
    </div>
  </header>
)

export default Header;
