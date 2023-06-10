import {  useSearchParams } from 'react-router-dom';
import { Imagen } from '../../components/Imagen/Imagen';

const FirstPortfolio = () => {  
  const [searchParams] = useSearchParams();
  console.log('searchParams', ); 

  return (
    <div>  
      <Imagen src={"https://pm1.aminoapps.com/6922/714394a04d4ef6ae60fb030685dcfed809931983r1-841-1024v2_uhq.jpg"} />
   
      <h2>Datos enviados: </h2>
      <p>Nombre: {searchParams.get('name')}</p>
      <p>GIT: {searchParams.get('git')}</p>
      <p>linkedin: {searchParams.get('linkedin')}</p>
      <p>proyects: {searchParams.get('proyects')}</p>
      <p>skills: {searchParams.get('skills')}</p>
      <p>description: {searchParams.get('description')}</p>
     </div>
  );
};

export default FirstPortfolio;