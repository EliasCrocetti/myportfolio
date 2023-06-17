import {  useSearchParams } from 'react-router-dom';
import { Imagen } from '../../components/Imagen/Imagen';
import './FirstPortfolio.css'
import { NavBarPortfolio } from '../../components/NavBarPortfolio/NavBarPortfolio';
import { LogoLinkedin } from '../../components/LogoLinkedin/LogoLinkedin';
import { LogoGitHub  } from '../../components/LogoGitHub/LogoGitHub';

const FirstPortfolio = () => {  
  const [searchParams] = useSearchParams();
  console.log('searchParams', ); 

  return (
    <>
    <NavBarPortfolio/>
    <div className='outer-container'>
    <div className='FirstPortfolio-container'>  
      <div className='leftDiv'>
        <div class="contenedor">
          {/* <div class="bloque">Bloque 1</div> */}  
          <div class="bloque"><span><LogoLinkedin/></span></div>
          <div class="bloque"><span><LogoGitHub/></span></div>
        </div>
          {/* <div className='imgClass'>  
            <Imagen src={"https://pm1.aminoapps.com/6922/714394a04d4ef6ae60fb030685dcfed809931983r1-841-1024v2_uhq.jpg"} />
          </div>  */}
          {/* <div className='skillsClass'>              
              <p>Nombre: {searchParams.get('name')}</p>
          </div> */}
      </div>
      <div className='rightDiv'>
            <div>proyects: {searchParams.get('proyects')}</div>
            <div>description: {searchParams.get('description')}</div>
      </div>
     </div></div>
    </>
  );
};

export default FirstPortfolio;