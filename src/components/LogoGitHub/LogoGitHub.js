import './LogoGitHub.css';
import gitHubImage from './LogoGitHub/github.png';

export const LogoGitHub = (props) => {


  return (
  <div>
      <img {...props} alt="Descripción de la imagen" className='imageGit' src={gitHubImage}/>
  </div>
  )
}
