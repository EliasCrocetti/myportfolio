import { Input } from "../../components/Input/Input"
import { Button } from "../../components/Button/Button"
import { useState } from "react";
import { useNavigate, Link, createSearchParams } from 'react-router-dom';

import { NavBar } from '../../components/NavBar/NavBar';


import './Home.css';
import { TextArea } from "../../components/TextArea/TextArea";
import InputComponent from "../../components/InputDynamic/InputDynamic";
import ProyectsC from "../../components/Proyects/Proyects";

const Home = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [git, setGit] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [foto, setImagenPerfil] = useState("");
  const [email, setEmail] = useState("");
  const [oficio, setOficio] = useState("");
  const [proyects, setProyects] = useState([]);
  const [skills, setSkills] = useState("");
  const [description, setDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState(null); //para los datos

  const validateArray = (array) => {
    let esValido = false;
    array.map((element) => {
      if (element === "") {
        esValido = false
      } else {
        esValido = true
      }
    });
    return esValido;
  }

  function validarElementos(name, git, linkedin, email, foto, oficio, proyects, skills) {
    const elementos = [name, git, linkedin, email, foto, oficio, proyects, skills];
    const elementoFaltante = elementos.find(elemento => !elemento || (Array.isArray(elemento) && elemento.length === 0));
    return elementoFaltante || null;
  }


  const handleClick = () => {
    let arrayProyectVacios = validateArray(proyects);
    let elementoFaltante = validarElementos(name, git, linkedin, email, foto, oficio, proyects, skills);

    if (!name || !git || !linkedin || !email || !foto || !oficio || !proyects || proyects.length === 0 || !skills) {
      setErrorMessage("Todos los campos son obligatorios, te falta agregar: " + elementoFaltante);
      return
    }

    setErrorMessage("");
    const data = {
      name: name,
      git: git,
      linkedin: linkedin,
      foto: foto,
      oficio: oficio,
      proyects: proyects,
      skills: skills,
      email: email,
      description: description
    };
    setData(data); // actualizo datos
    const params = new URLSearchParams(); // nueva instancia del URLSearchParams

    // parametros
    params.append('name', name);
    params.append('git', git);
    params.append('linkedin', linkedin);
    params.append('foto', foto);
    params.append('email', email);
    params.append('oficio', oficio);
    params.append('skills', skills);
    params.append('description', description);

    proyects.forEach((proyecto, index) => {
      params.append(`tituloProyecto${index + 1}`, proyecto.titulo);
      params.append(`descripcionProyecto${index + 1}`, proyecto.descripcion);
      params.append(`enlaceImagen${index + 1}`, proyecto.enlaceImagen);
      params.append(`enlaceAlProyecto${index + 1}`, proyecto.enlaceAlProyecto);
    });

    // Obtener la URL completa con los parametros
    const url = `first-portfolio?${params.toString()}`;

    navigate(url);
  };

  const handleTextAreaChange = (value) => {
    console.log("event description", value);
    setDescription(value);
  };

  return (
    <><NavBar />
      <div className="conteiner">
        <div className="homeConteiner">
          <Input maxLength={100} placeholder={"Ingresá tu Nombre completo"} onChange={(event) => setName(event.target.value)} />
          <Input maxLength={100} placeholder={"Link de tu GIT"} onChange={(event) => setGit(event.target.value)} />
          <Input maxLength={100} placeholder={"Link de tu Linkedin"} onChange={(event) => setLinkedin(event.target.value)} />
          <Input maxLength={100} placeholder={"Ingresá tu Email"} onChange={(event) => setEmail(event.target.value)} />
          <Input maxLength={100} placeholder={"Link de tu foto en JPG"} onChange={(event) => setImagenPerfil(event.target.value)} />
          <Input maxLength={100} placeholder={"Tu oficio. Ej: FrontEnd Development"} onChange={(event) => setOficio(event.target.value)} />
          <Input maxLength={100} placeholder={"Tus skills ej: react, angular"} onChange={(event) => setSkills(event.target.value)} />
          {/* <InputComponent placeholder={"Link a tus proyectos"} onChange={(proyects) => setProyects(proyects)} /> */}
          <ProyectsC onChange={(proyects) => setProyects(proyects)} />
          <TextArea placeholder={"Descripcion, recuerda escribirla en ingles. \nSi no tenes, deja este campo vacio"}
            onChange={(event) => handleTextAreaChange(event.target.value)} />

          <br />{errorMessage && <span className="errorMessage">{errorMessage}</span>}<br />
          <Button onClick={handleClick}>Enviar</Button>
        </div>
      </div></>
  )
}

export default Home;
