import {  useSearchParams } from 'react-router-dom';
import { Imagen } from '../../components/Imagen/Imagen';
import './FirstPortfolio.css'

const FirstPortfolio = () => {  
  const [searchParams] = useSearchParams();
  console.log('searchParams', ); 

  return (
    <div className='container'>  
      <div className='leftDiv'>
          <div className='imgClass'>  
            <Imagen src={"https://pm1.aminoapps.com/6922/714394a04d4ef6ae60fb030685dcfed809931983r1-841-1024v2_uhq.jpg"} />
          </div>
          <div className='skillsClass'>              
              <p>Nombre: {searchParams.get('name')}</p>
              <p>GIT: {searchParams.get('git')}</p>
              <p>linkedin: {searchParams.get('linkedin')}</p>
              <p>skills: {searchParams.get('skills')}</p>
          </div>
      </div>
      <div className='rightDiv'>
            <div>proyects: {searchParams.get('proyects')}</div>
            <div>description: {searchParams.get('description')}</div>
      </div>
     </div>
  );
};

export default FirstPortfolio;