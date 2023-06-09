//import s from './Input.css';
import { useState } from 'react';
import './TextArea.css';

export const TextArea = (props) => {

  const [textValue, settextValue] = useState('');

  const handleChange = (event) => {
    settextValue(event.target.value);
    if (textValue.length < 500) {
      settextValue(event.target.value);
      console.log(event.target.value);
    }
  };

  return (
    <>
      <textarea value={textValue} {...props}  
      maxLength={500} 
      onChange={handleChange} 
      className='textarea-no-side-borders'/>

      <span className='textarea'>Restan: {500 - textValue.length} caracteres</span>
    </>
  )
}
