//import s from './Input.css';
import { useState } from 'react';
import './TextArea.css';

export const TextArea = (props) => {

  return (
    <>
      <textarea  {...props}  
      maxLength={500} 
      className='textarea-no-side-borders'/>

      {/* <span className='textarea'>Restan: {500 - textValue.length} caracteres</span> */}
    </>
  )
}
