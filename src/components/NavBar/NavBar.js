import React from 'react'
// import { Routes,Route } from 'react-router-dom'
// import { Logo } from '../Logo'

// <Routes>
// <Route path="/" element={<Logo/>}/>
// </Routes>

import './NavBar.css';
import  logo  from './logo/logo.svg';


export const NavBar = () => {
  return (
    <>
        <nav>
          <ul> 
            <li>
              <img className='logo' src={logo} /> 
            </li>
            <li>
              <a href='#'>About us</a>
            </li>
          </ul>
          </nav>
    </>
  )
}
