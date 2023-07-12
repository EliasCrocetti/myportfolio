import './ImagenPerfil.css';

export const ImagenPerfil = (props) => {
  //recibo todas las propiedades de la img
  const { alt, ...otherProps } = props;

  console.log(otherProps.src[0])

  return (
    <div>
    <img {...otherProps} alt={alt} className='imagenPerfil' />
    </div>
  )
}
