import React from 'react';

import { Link } from 'react-router-dom';

import './_footer.sass';

const Footer = (props) => (
  <footer className="footer">
    <div className="container">
      <div className="footer__inner">
        <p className="copywrite"><Link to="/">React-Project</Link>, 2019</p>
      </div>
    </div>
  </footer>
)

export default Footer;
