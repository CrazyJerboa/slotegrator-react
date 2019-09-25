import React from 'react';

import { Link } from 'react-router-dom';

import './_logo.sass';

const logo_img = require('../../assets/img/logo.svg');

const Logo = (props) => (
  <Link to='/' className="logo"><img src={logo_img} alt="" /></Link>
)

export default Logo;
