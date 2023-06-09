import { Input } from "../../components/Input/Input"
import { Button } from "../../components/Button/Button"

import './Home.css';
import { TextArea } from "../../components/TextArea/TextArea";
import InputComponent from "../../components/InputDynamic/InputDynamic";
import { useState } from "react";



const Home = () => {
  const [name, setName] = useState("");
  const [git, setGit] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [proyects, setProyects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [description, setDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateArray = (array) =>{
    let esValido = false;
    array.map((element) => {
        console.log(element)
    
        if (element === ""){
          esValido = false
        }
        else{
          esValido = true
        }
    });
    return esValido;
  }

  const handleClick = () => {
    let arrayProyectVacios = validateArray(proyects)
    let arraySkillsVacios = validateArray(skills)
    console.log(arraySkillsVacios)
    console.log(skills, arraySkillsVacios)
    if (!name || !git || !linkedin || arrayProyectVacios ===false || arraySkillsVacios ===false || !description) {
      setErrorMessage("Todos los campos son obligatorios");
    } else {
      setErrorMessage("");
      console.log(
        name + " name " +
        git + " git " +
        linkedin + " linkedin " +
        proyects.join(", ") + " proyects " +
        skills.join(", ") + " skills " +
        description + " description"
      );
    }
  };
  return (

      <div className="conteiner">

          <div className="homeConteiner">
            <Input placeholder={"Ingresá nombre completo"} onChange={(event) => setName(event.target.value)} />
            <Input placeholder={"Ingresá tu GIT"} onChange={(event) => setGit(event.target.value)}/>
            <Input placeholder={"Ingresá tu Linkedin"} onChange={(event) => setLinkedin(event.target.value)} />
            <InputComponent placeholder={"Link a tus proyectos"} onChange={(proyects) => setProyects(proyects)} />
            <InputComponent placeholder={"Tus Skills"} onChange={(skills) => setSkills(skills)} />
            <TextArea placeholder={"Descripcion"} onChange={(event) => setDescription(event.target.value)}/>7
            {errorMessage && <p>{errorMessage}</p>}
            <Button onClick={handleClick} >Enviar</Button>
        
          </div>
        </div>
    )
}

export default Home