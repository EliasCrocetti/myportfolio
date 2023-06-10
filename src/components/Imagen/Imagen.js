//import s from './Input.css';
import { useState } from 'react';
import './Imagen.css';

export const Imagen = (props) => {


  return (
  <div>
      <img {...props} alt="Descripción de la imagen" className='imageCircular' />
  </div>
  )
}
