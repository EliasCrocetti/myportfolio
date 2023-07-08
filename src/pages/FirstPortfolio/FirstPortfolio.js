import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Imagen } from '../../components/Imagen/Imagen';
import './FirstPortfolio.css';
import { NavBarPortfolio } from '../../components/NavBarPortfolio/NavBarPortfolio';
import { LogoLinkedin } from '../../components/LogoLinkedin/LogoLinkedin';
import { LogoGitHub } from '../../components/LogoGitHub/LogoGitHub';
import { LogoEmail } from '../../components/LogoEmail/LogoEmail';
import { DataPerson } from '../../components/DataPerson/DataPerson';
import { FaReact, FaAngular, FaPython } from 'react-icons/fa';
import ContactForm from '../../components/Contact/Contact';
import Card from '../../components/Cards/Cards';


const FirstPortfolio = () => {
  const [searchParams] = useSearchParams();
  const [isLoopPaused, setIsLoopPaused] = useState(false);
  const [marqueePaused, setMarqueePaused] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('linear-gradient(180deg, #151419, #9198e5)');
  const [gradient, setGradient] = useState(backgroundColor);
  const [changeColorText, setchangeColorText] = useState('white');



  const skillsArray = searchParams.getAll('skills');
  const skillsString = skillsArray.join(",");
  const skills = skillsString.split(",");

  const keywords = ['react', 'angular', 'python', 'c#'];


  const hasAngular = skills.some(skill => skill.includes("angular"));
  const hasReact = skills.some(skill => skill.includes("react"));
  const hasPython = skills.some(skill => skill.includes("python"));
  const hasCSharp = skills.some(skill => skill.includes("hola"));

  const projects = [];
  searchParams.forEach((valueElementSearchParam, key) => {
    if (key.startsWith('tituloProyecto')) {
      const index = key.slice('tituloProyecto'.length);
      const project = {
        titulo: valueElementSearchParam,
        descripcion: searchParams.get(`descripcionProyecto${index}`),
        enlaceImagen: searchParams.get(`enlaceImagen${index}`),
        enlaceAlProyecto: searchParams.get(`enlaceAlProyecto${index}`)
      };
      projects.push(project);
    }
  });

  const handleColorChange = (colorBackGround1, colorBackGround2, colorDescription) => {
    //const gradient = `linear-gradient(180deg, ${colorBackGround1}, ${colorBackGround2})`;  
    setGradient(`linear-gradient(180deg, ${colorBackGround1}, ${colorBackGround2})`);
    setBackgroundColor(`linear-gradient(180deg, ${colorBackGround1}, ${colorBackGround2})`);
    //setBackgroundColor(gradient); // Cambia el fondo con el degradado
    
    //setBackgroundColor(colorBackGround1, colorBackGround2); // cambia fondo
    if (colorDescription === "pink") {
      setchangeColorText('#ff69b4')
    }    
    if (colorDescription === "black") {
      setchangeColorText('black')
    }    
    if (colorDescription === "green") {
      setchangeColorText('green')
    }    
    if (colorDescription === "original") {
      setchangeColorText('white')
    }
  };

  const handleMouseEnter = () => {
    if (!marqueePaused) {
      setIsLoopPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (!marqueePaused) {
      setIsLoopPaused(false);
    }
  };

  const toggleLoop = () => {
    if (marqueePaused) {
      setMarqueePaused(false);
    } else {
      setMarqueePaused(true);
      if (!marqueePaused) {
        setIsLoopPaused(true);
      }
    }
  };
  
  // const toggleLoop = () => {
  //   setIsLoopPaused(!isLoopPaused);
  //   setMarqueePaused(!marqueePaused);
  // };

  

  useEffect(() => {
    document.body.style.backgroundColor = gradient; // Actualizar el color de fondo del body
    return () => {
      document.body.style.backgroundColor = ''; // Restaurar el color de fondo original del body al desmontar el componente
    };
  }, [gradient]);

  return (
    <>
      <NavBarPortfolio onColorChange={handleColorChange} />
      <div className='outer-container'>
        <div className='FirstPortfolio-container' style={{ background: gradient, color: changeColorText }}>
          <div className='leftDiv'>
            <div className="contenedor">
              <div className="bloque"><span><LogoLinkedin href={searchParams.get('linkedin')} /></span></div>
              <div className="bloque"><span><LogoGitHub href={searchParams.get('git')} /></span></div>
              <div className="bloque"><span><LogoEmail href={searchParams.get('git')} /></span></div>
            </div>
          </div>
          <div className="rightDiv" style={{ background: gradient, color: changeColorText }}>
            <div>
              <DataPerson
                text={searchParams.get('name')}
                oficio={searchParams.getAll('oficio')}
                foto={searchParams.getAll('foto')}
                description={searchParams.get('description')}
                skills={searchParams.get('skills')}
              ></DataPerson>
              <div className="button-wrapper">
                <div
                  className='marquee'
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <span className={`react-icon infiniteLoop ${isLoopPaused ? 'pausedLoop' : ''}`}>
                    {searchParams.getAll('skills').reverse().join(', ')}
                  </span>
                  {/* {hasReact && <FaReact className={`react-icon infiniteLoop ${isLoopPaused ? 'pausedLoop' : ''}`} />}
                  {hasAngular && <FaAngular className={`react-icon infiniteLoop ${isLoopPaused ? 'pausedLoop' : ''}`} />}
                  {hasPython && <FaPython className={`react-icon infiniteLoop ${isLoopPaused ? 'pausedLoop' : ''}`} />}
                  {keywords.map(keyword => {
                  const lowerCaseKeyword = keyword.toLowerCase().trim();
                  if (skills.includes(lowerCaseKeyword)) {
                    switch (lowerCaseKeyword) {
                      case 'react':
                        return <FaReact key={keyword} className={`react-icon infiniteLoop ${isLoopPaused ? 'pausedLoop' : ''}`} />;
                      case 'angular':
                        return <FaAngular key={keyword} className={`angular-icon infiniteLoop ${isLoopPaused ? 'pausedLoop' : ''}`} />;
                      case 'python':
                        return <FaPython key={keyword} className={`python-icon infiniteLoop ${isLoopPaused ? 'pausedLoop' : ''}`} />;
                      // case 'c#':
                      //   return <FaCsharp key={keyword} className={`csharp-icon infiniteLoop ${isLoopPaused ? 'pausedLoop' : ''}`} />;
                      default:
                        return null;
                    }
                  } else {
                    return null;
                  }
                })} */}

                  {/* <span className={`infiniteLoop ${isLoopPaused ? 'pausedLoop' : ''}`}> {searchParams.getAll('skills')}</span>
                  <span className={`infiniteLoop ${isLoopPaused ? 'pausedLoop' : ''}`}> {searchParams.getAll('skills')}</span> */}

                </div>
                {/* <button onClick={toggleLoop}>hola probando {isLoopPaused ? 'Pausado' : 'Reanudar'}</button> */}
              </div>
            </div>
            <div className='conteinerDataProyects'>
              {projects.map((element, key) => (
                <Card
                  imageUrl={element.enlaceImagen}
                  title={element.titulo}
                  content={element.descripcion}
                  link={element.enlaceAlProyecto}
                />
              ))}
            </div>
            <div href="#contactMe" className='classEmail'>
              Contact Me: {searchParams.get('email')}
              {/* <ContactForm email={searchParams.get('email')}></ContactForm> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstPortfolio;
