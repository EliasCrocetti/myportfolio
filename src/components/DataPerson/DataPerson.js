import { ImagenPerfil } from '../ImagenPerfil/ImagenPerfil';
import './DataPerson.css';


export const DataPerson = (props) => {

  console.log(props, "props DataPerson")

  return (
  <div className='containerDataInformation'>
    <div className='leftInformation'>
      <h1><span>Hi!, I'm {props.text}</span></h1>
      <h5><span className='classOficio'>{props.oficio}</span></h5>
      <h3><span>{props.description}</span></h3>
    </div>

    <div className='rightInformation'>
      <ImagenPerfil src={"https://pm1.aminoapps.com/6922/714394a04d4ef6ae60fb030685dcfed809931983r1-841-1024v2_uhq.jpg"}/>

    </div>

  </div>
  )
}
