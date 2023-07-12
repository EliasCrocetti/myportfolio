import './ImagenPerfil.css';

export const ImagenPerfil = (props) => {
  //recibo todas las propiedades de la img
  const { alt, ...otherProps } = props;

  return (
    <div>
    <img {...otherProps} alt={alt} className='imagenPerfil' />
    </div>
  )
}
