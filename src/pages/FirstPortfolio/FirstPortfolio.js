import {  useSearchParams } from 'react-router-dom';

const FirstPortfolio = () => {  
  const [searchParams] = useSearchParams();
  console.log('searchParams', ); // ▶ URLSearchParams {}

  // Aquí puedes utilizar los datos recibidos
  // por ejemplo, mostrarlos en la pantalla

  return (
    <div>
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