//import s from './Input.css';
import { useState } from 'react';
import './Input.css';

export const Input = (props) => {
  console.log("props input", props)


  return (
    <input className="Input" {...props}/>
  )
}
