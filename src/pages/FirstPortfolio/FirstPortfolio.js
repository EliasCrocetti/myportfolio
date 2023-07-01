import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Imagen } from '../../components/Imagen/Imagen';
import './FirstPortfolio.css';
import { NavBarPortfolio } from '../../components/NavBarPortfolio/NavBarPortfolio';
import { LogoLinkedin } from '../../components/LogoLinkedin/LogoLinkedin';
import { LogoGitHub } from '../../components/LogoGitHub/LogoGitHub';
import { DataPerson } from '../../components/DataPerson/DataPerson';
import { FaReact, FaAngular, FaPython } from 'react-icons/fa';


const FirstPortfolio = () => {
  const [searchParams] = useSearchParams();
  const [isLoopPaused, setIsLoopPaused] = useState(false);
  const [marqueePaused, setMarqueePaused] = useState(false);

  
  const skillsArray = searchParams.getAll('skills');
  const skillsString = skillsArray.join(",");
  const skills = skillsString.split(",");

  const keywords = ['react', 'angular', 'python', 'c#'];

    
  const hasAngular = skills.some(skill => skill.includes("angular"));
  const hasReact = skills.some(skill => skill.includes("react"));
  const hasPython = skills.some(skill => skill.includes("python"));
  const hasCSharp = skills.some(skill => skill.includes("hola"));
  
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

  return (
    <>
      <NavBarPortfolio />
      <div className='outer-container'>
        <div className='FirstPortfolio-container'>
          <div className='leftDiv'>
            <div className="contenedor">
              <div className="bloque"><span><LogoLinkedin href={searchParams.get('linkedin')} /></span></div>
              <div className="bloque"><span><LogoGitHub href={searchParams.get('git')} /></span></div>
            </div>
          </div>
          <div className="rightDiv">
            <div>
              <DataPerson
                text={searchParams.get('name')}
                oficio={searchParams.getAll('oficio')}
                foto={searchParams.getAll('foto')}
                description={searchParams.getAll('description')}
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
            <div>
              2
            </div>
            <div>3</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstPortfolio;
