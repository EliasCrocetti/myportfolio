import { Input } from "../../components/Input/Input"
import { Button } from "../../components/Button/Button"
import { useEffect, useState } from "react";
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
  const [backgroundColor, setBackgroundColor] = useState('linear-gradient(180deg, #151419, #9198e5)');
  const [gradient, setGradient] = useState(backgroundColor);
  const [changeColorText, setchangeColorText] = useState('white');


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
    const elementos = [
      { nombre: 'name', valor: name },
      { nombre: 'git', valor: git },
      { nombre: 'linkedin', valor: linkedin },
      { nombre: 'email', valor: email },
      { nombre: 'foto', valor: foto },
      { nombre: 'oficio', valor: oficio },
      { nombre: 'proyects', valor: proyects },
      { nombre: 'skills', valor: skills }
    ];

    const elementoFaltante = elementos.find(elemento => {
      if (!elemento.valor || (Array.isArray(elemento.valor) && elemento.valor.length === 0)) {
        return true;
      }
      if (elemento.nombre === 'proyects' && Array.isArray(elemento.valor)) {
        return elemento.valor.some(proyecto => {
          // devuelve el elemento vacio de proyct
          return !proyecto.titulo || !proyecto.descripcion || !proyecto.enlaceImagen || !proyecto.enlaceAlProyecto;
        });
      }
      return false;
    });

    return elementoFaltante ? elementoFaltante.nombre : null;
  }

  const handleColorChange = (colorBackGround1, colorBackGround2, colorDescription) => {

    setBackgroundColor(`linear-gradient(180deg, ${colorBackGround1}, ${colorBackGround2})`); // fondo del portfolio
    setGradient(colorBackGround2); // fondo del body

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

  const handleClick = () => {
    let arrayProyectVacios = validateArray(proyects);
    let elementoFaltante = validarElementos(name, git, linkedin, email, foto, oficio, proyects, skills);

    const proyectoVacio = proyects.find(proyecto => (
      !proyecto.titulo || !proyecto.descripcion || !proyecto.enlaceImagen || !proyecto.enlaceAlProyecto
    ));

    if (proyectoVacio) {
      setErrorMessage("Todos los campos de proyectos son obligatorios");
      return;
    }

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

    // color seleccionado backgroundColor desde el estado
    const backgroundColor1 = backgroundColor.split(',')[1].trim();
    const backgroundColor2 = backgroundColor.split(',')[2].trim().split(')')[0];

    // agrega color los parametros
    params.append('backgroundColor1', backgroundColor1);
    params.append('backgroundColor2', backgroundColor2);

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

  useEffect(() => {
    document.body.style.background = gradient; // Actualizar el color de fondo del body
    return () => {
      document.body.style.background = ''; // Restaurar el color de fondo original del body al desmontar el componente
    };
  }, [gradient]);


  return (
    <><NavBar onColorChange={handleColorChange} />
      <div className="conteiner" style={{ background: backgroundColor, color: changeColorText }}>
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
