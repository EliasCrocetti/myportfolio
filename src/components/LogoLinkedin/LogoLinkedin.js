import './LogoLinkedin.css';
import linkedinImage from './LogoLinkedin/linkedin.png';

export const LogoLinkedin = (props) => {


  return (
  <div>
      <img {...props} alt="Descripción de la imagen" className='imageCircular' src={linkedinImage}/>
  </div>
  )
}
