import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Imagen } from '../../components/Imagen/Imagen';
import './FirstPortfolio.css';
import { NavBarPortfolio } from '../../components/NavBarPortfolio/NavBarPortfolio';
import { LogoLinkedin } from '../../components/LogoLinkedin/LogoLinkedin';
import { LogoGitHub } from '../../components/LogoGitHub/LogoGitHub';
import { DataPerson } from '../../components/DataPerson/DataPerson';

const FirstPortfolio = () => {
  const [searchParams] = useSearchParams();
  const [isLoopPaused, setIsLoopPaused] = useState(false);
  const [marqueePaused, setMarqueePaused] = useState(false);

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
    setIsLoopPaused(!isLoopPaused);
    setMarqueePaused(!marqueePaused);
  };

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
                  <span className={`infiniteLoop ${isLoopPaused ? 'pausedLoop' : ''}`}> {searchParams.getAll('skills')}</span>
                  <span className={`infiniteLoop ${isLoopPaused ? 'pausedLoop' : ''}`}> {searchParams.getAll('skills')}</span>
                </div>
                <button onClick={toggleLoop}>hola probando {isLoopPaused ? 'Pausado' : 'Reanudar'}</button>
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
