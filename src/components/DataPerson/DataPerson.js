import { ImagenPerfil } from '../ImagenPerfil/ImagenPerfil';
import { useLocation } from "react-router-dom";

import './DataPerson.css';



export const DataPerson = (props) => {
  //const decodedImageUrl = decodeURIComponent(props.foto);

  const decodedText = atob(props.foto);
  // name: netflix 
  console.log('url: ', decodedText)


  return (
    <div className='containerDataInformation'>
      <div className='leftInformation'>
        <h5><span>Hi!, I'm {props.text}</span>
          <h2 className='classOficio'>{props.oficio}</h2>
        </h5>
        <h3 className='espacioSuperior'>
          <span>
            {!props.description || props.description.length === 0 ? (
              <h4>
                I have experience in software development, specifically in {props.oficio}
                development, using <span className='dataPersonSkills'>{props.skills}</span>. Additionally, and
                I have experience in technical troubleshooting and customer service, as well as skills
                in teamwork, y project management.</h4>
            ) : (
              <h4>
                {props.description}
              </h4>
            )}
          </span>
        </h3>
      </div>
      <div className='rightInformation'>


        <ImagenPerfil src={decodedText} />

        {/* {props.foto && /\.(jpg|jpeg|png|gif)$/.test(props.foto) ? (
        <>
        <ImagenPerfil src={props.foto} /></>
      ) : (
        <>
       <ImagenPerfil src={"https://pm1.aminoapps.com/6922/714394a04d4ef6ae60fb030685dcfed809931983r1-841-1024v2_uhq.jpg"}/>
      </>)} */}
      </div>

    </div>
  )
}
