import './NavBarPortfolio.css';
import logo from './logo/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import React, { useState } from 'react';

export const NavBarPortfolio = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className='nav-porflio'>
        <ul className={`containerNav ${isMenuOpen ? 'menu-open' : ''}`}>
          <li className="left-align">
            <img className='logo' src={logo} alt="Logo" />
          </li>
          <li className="center-buttons">
            <a href='#' className='topButton'>Proyects</a>
          </li>
          <li className="center-buttons">
            <a href='#' className='topButton'>About</a>
          </li>
          <li className="center-buttons">
            <a href='#' className='topButton'>Contact</a>
          </li>
          
          <li className="right-buttons">
          <span className="resume">Resume</span>
          </li>
          <li className="menu-toggle" onClick={handleMenuToggle}>
            <FontAwesomeIcon icon={faBars} />
          </li>
        </ul>
      </nav>
    </>
  );
};
