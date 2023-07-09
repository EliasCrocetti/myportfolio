import './NavBarPortfolio.css';
import logo from './logo/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import React, { useState } from 'react';

export const NavBarPortfolio = ({ onColorChange }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleColorButtonClick = (color1, color2, colorDescription) => {
    onColorChange(color1, color2, colorDescription); // Llamar a la función onColorChange del componente padre
  };

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className='nav-porfolio'>
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
            <a href='#contactMe' className='topButton'>Contact</a>
          </li>
          {/* <li className="center-buttons">
            <button className="changeWhite" onClick={() => handleColorButtonClick('#003400', '#89004f', 'pink')}></button>
            <button className="changeBlack" onClick={() => handleColorButtonClick('#151419', '#02024C', 'original')}></button>
            <button className="changeGreen" onClick={() => handleColorButtonClick('#4C1864','#003400', 'green')}></button>
            <button className="changeCyan" onClick={() => handleColorButtonClick('#151419', '#9198e5', 'original')}></button>
            <button className="changeOriginal" onClick={() => handleColorButtonClick('#151419', '#282c34', 'original')}></button>
          </li> */}
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
