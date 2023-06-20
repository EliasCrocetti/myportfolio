import {  useSearchParams } from 'react-router-dom';
import { Imagen } from '../../components/Imagen/Imagen';
import './FirstPortfolio.css'
import { NavBarPortfolio } from '../../components/NavBarPortfolio/NavBarPortfolio';
import { LogoLinkedin } from '../../components/LogoLinkedin/LogoLinkedin';
import { LogoGitHub  } from '../../components/LogoGitHub/LogoGitHub';
import { DataPerson } from '../../components/DataPerson/DataPerson';

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
          <div class="bloque"><span><LogoLinkedin href={searchParams.get('linkedin')}/></span></div>
          <div class="bloque"><span><LogoGitHub href={searchParams.get('git')}/></span></div>
        </div>
          {/* <div className='imgClass'>  
            <Imagen src={"https://pm1.aminoapps.com/6922/714394a04d4ef6ae60fb030685dcfed809931983r1-841-1024v2_uhq.jpg"} />
          </div>  */}
          {/* <div className='skillsClass'>              
              <p>Nombre: {searchParams.get('name')}</p>
          </div> */}
      </div>
      <div class="rightDiv">
          <div><DataPerson text="hola"></DataPerson></div>
          <div>2</div>
          <div>3</div>
        </div>
      {/* <div className='rightDiv'>
            <div>proyects: {searchParams.get('proyects')}</div>
            <div>description: {searchParams.get('description')}</div>
      </div> */}
     </div></div>
    </>
  );
};

export default FirstPortfolio;