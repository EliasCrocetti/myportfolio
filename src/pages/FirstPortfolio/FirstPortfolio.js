import { useLocation } from 'react-router-dom';

const FirstPortfolio = () => {  
  const location = useLocation();
  const data = location.state;
  console.log(data, "desde first portfolio")
  // Aquí puedes utilizar los datos recibidos
  // por ejemplo, mostrarlos en la pantalla

  return (
    <div>
      <h2>Datos enviados:</h2>
      <p>Nombre: {data.name}</p>
      <p>GIT: {data.git}</p>
      {/* ... otros datos */}
    </div>
  );
};

export default FirstPortfolio;