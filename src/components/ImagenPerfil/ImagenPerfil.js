import './ImagenPerfil.css';

export const ImagenPerfil = (props) => {


  return (
  <div>
      <img {...props} alt="Descripción de la imagen" className='imagenPerfil' />
  </div>
  )
}
