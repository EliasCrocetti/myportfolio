import './Imagen.css';

export const Imagen = (props) => {


  return (
  <div>
      <img {...props} alt="Descripción de la imagen" className='imageCircular' />
  </div>
  )
}
