import './LogoGitHub.css';
import gitHubImage from './LogoGitHub/github.png';

export const LogoGitHub = (props) => {
  const { href } = props;

return (
    <div>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <img {...props} alt="Descripción de la imagen" className='imageGit' src={gitHubImage}/>
      </a>
  </div>
  );
}
