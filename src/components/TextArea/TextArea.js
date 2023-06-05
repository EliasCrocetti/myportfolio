//import s from './Input.css';
import { useState } from 'react';
import './TextArea.css';

export const TextArea = (props) => {

  const [textValue, settextValue] = useState('');

  const handleChange = (event) => {
    settextValue(event.target.value);
    if (textValue.length < 10) {
      settextValue(event.target.value);
      console.log(event.target.value);
    }
  };

  return (
    <>
      <textarea value={textValue} {...props}  
      maxLength={10} 
      onChange={handleChange} 
      className='textarea-no-side-borders'/>

      <span className='textarea'>Restan: {10 - textValue.length} caracteres</span>
    </>
  )
}
