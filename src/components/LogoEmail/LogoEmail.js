import './LogoEmail';
import emailImage from './LogoEmail/logoEmail.png';

export const LogoEmail = (props) => {
  const { href } = props;

  return (
    <div>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <img {...props} alt="Descripción de la imagen" className='imageCircular' src={emailImage}/>
      </a>
    </div>
  );
}
