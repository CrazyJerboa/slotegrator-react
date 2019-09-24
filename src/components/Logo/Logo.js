import React from 'react';

import './_logo.sass';

const logo_img = require('../../assets/img/logo.svg');

const Logo = (props) => (
  <a className="logo" href="/"><img src={logo_img} alt="" /></a>
)

export default Logo;
