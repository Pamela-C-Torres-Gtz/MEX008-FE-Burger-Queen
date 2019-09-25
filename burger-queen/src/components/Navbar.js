import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Navbar.css';


import '../styles/index.css';

import logo from '../img/logo.png';
import logodemonium from '../img/logodemonium.png';


class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <Link className="Navbar__brand" to="/">
            <img className="Navbar__brand-logo" src={logo} alt="Logo" />
            <img className="Navbar__brand-logoDmonuim" src={logodemonium} alt="Logo2" />
          </Link>
        </div>
      </div>
    );

  }
}

export default Navbar;

