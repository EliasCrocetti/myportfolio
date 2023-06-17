import './LogoLinkedin.css';
import linkedinImage from './LogoLinkedin/linkedin.png';

export const LogoLinkedin = (props) => {
  const { href } = props;

  return (
    <div>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <img {...props} alt="Descripción de la imagen" className='imageCircular' src={linkedinImage}/>
      </a>
    </div>
  );
}
