import { Input } from "../../components/Input/Input"
import { Button } from "../../components/Button/Button"

import './Home.css';
import { TextArea } from "../../components/TextArea/TextArea";
import InputComponent from "../../components/InputDynamic/InputDynamic";



const Home = () => {
  return (

      <div className="conteiner">

          <div className="homeConteiner">
            <Input placeholder={"Ingresá nombre completo"} />
            <Input placeholder={"Ingresá tu GIT"} />
            <Input placeholder={"Ingresá tu Linkedin"} />
            <Input placeholder={"Link a tus Proyectos"} />

            <InputComponent/>
            <TextArea placeholder={"Descripcion"} />
            
            <Button>Enviar</Button>
        

          </div>
        </div>
    )
}

export default Home