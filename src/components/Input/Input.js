//import s from './Input.css';
import { useState } from 'react';
import './Input.css';

export const Input = (props) => {

  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
    console.log(event.target.value)
  };

  return (
    <input 
    className="Input" {...props} 
    value={inputValue}
    onChange={handleChange}/>
  )
}
