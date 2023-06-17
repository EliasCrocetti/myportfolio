import { Input } from "../../components/Input/Input"
import { Button } from "../../components/Button/Button"
import { useState } from "react";
import { useNavigate, Link, createSearchParams } from 'react-router-dom';

import { NavBar } from '../../components/NavBar/NavBar';


import './Home.css';
import { TextArea } from "../../components/TextArea/TextArea";
import InputComponent from "../../components/InputDynamic/InputDynamic";

const Home = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [git, setGit] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [proyects, setProyects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [description, setDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState(null); //para los datos

  const validateArray = (array) => {
    let esValido = false;
    array.map((element) => {
      console.log(element)

      if (element === "") {
        esValido = false
      } else {
        esValido = true
      }
    });
    return esValido;
  }

  const handleClick = () => {
    let arrayProyectVacios = validateArray(proyects)
    let arraySkillsVacios = validateArray(skills)
    console.log(skills, arraySkillsVacios)
    if (!name || !git || !linkedin || arrayProyectVacios === false || arraySkillsVacios === false || !description) {
      setErrorMessage("Todos los campos son obligatorios");
      return
    }

    setErrorMessage("");
    const data = {
      name: name,
      git: git,
      linkedin: linkedin,
      proyects: proyects,
      skills: skills,
      description: description
    };
    setData(data); // actualizo datos

    navigate(`first-portfolio?name=${name}&git=${git}&linkedin=${linkedin}&proyects=${proyects}
      &skills=${skills}&description=${description}`);
  };

  const handleTextAreaChange = (event) => {
    console.log("event description", event.target.value)
    setDescription(event.target.value)
  }

  return (
    <><NavBar />
    <div className="conteiner">
      <div className="homeConteiner">
        <Input placeholder={"Ingresá nombre completo"} onChange={(event) => setName(event.target.value)} />
        <Input placeholder={"Ingresá tu GIT"} onChange={(event) => setGit(event.target.value)} />
        <Input placeholder={"Ingresá tu Linkedin"} onChange={(event) => setLinkedin(event.target.value)} />
        <Input placeholder={"Ingresá link de tu foto"} onChange={(event) => setLinkedin(event.target.value)} />
        {/* <Imagen src={"ola"}/> */}
        <InputComponent placeholder={"Link a tus proyectos"} onChange={(proyects) => setProyects(proyects)} />
        <InputComponent placeholder={"Tus Skills"} onChange={(skills) => setSkills(skills)} />
        <TextArea placeholder={"Descripcion"} onChange={handleTextAreaChange} />
        <br />{errorMessage && <span className="errorMessage">{errorMessage}</span>}<br />
        <Button onClick={handleClick}>Enviar</Button>
      </div>
      {/*data && <FirstPortfolio data={data} />*/} {/* Renderizar el componente si hay datos */}
    </div></>
  )
}

export default Home;
