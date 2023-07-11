import React from 'react'
// import { Routes,Route } from 'react-router-dom'
// import { Logo } from '../Logo'

// <Routes>
// <Route path="/" element={<Logo/>}/>
// </Routes>

import './NavBar.css';
import logo from './logo/logo.svg';


export const NavBar = ({ onColorChange }) => {

  const handleColorButtonClick = (color1, color2, colorDescription) => {
    onColorChange(color1, color2, colorDescription); // Llamar a la función onColorChange del componente padre
  };

  return (
    <>
      <nav>
        <ul>
          <li>
            <img className='logo' src={logo} />
          </li>
          <li className="center-buttons">
            <button className="changeWhite" onClick={() => handleColorButtonClick('#003400', '#89004f', 'pink')}></button>
            <button className="changeBlack" onClick={() => handleColorButtonClick('#151419', '#02024C', 'original')}></button>
            <button className="changeGreen" onClick={() => handleColorButtonClick('#4C1864', '#003400', 'green')}></button>
            <button className="changeCyan" onClick={() => handleColorButtonClick('#151419', '#9198e5', 'original')}></button>
            <button className="changeOriginal" onClick={() => handleColorButtonClick('#151419', '#282c34', 'original')}></button>
            <button className="changeBordo" onClick={() => handleColorButtonClick('#855', '#111', 'original')}></button>
          </li>
          <li>
            <a href='#' className='aboutUs'>About us!</a>
          </li>
        </ul>
      </nav>
    </>
  )
}
