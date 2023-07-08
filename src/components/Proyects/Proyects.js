import { useState } from "react";
import "./Proyects.css"; // Importar el archivo CSS con las clases de estilo

const ProyectsC = ({ onChange }) => {
  //recibo la funcion onchange como una prop
  const [inputs, setInputs] = useState([]);
  const [count, setCount] = useState(0);

  const handleAddInput = () => {
    setCount(count +1);
    console.log(count)
 
    const newInput = {
      titulo: "",
      descripcion: "",
      enlaceImagen: "",
      enlaceAlProyecto: ""
    };

    setInputs([...inputs, {}]);   
    onChange([...inputs, newInput]); // Comunicar los cambios al componente padre
 
  };

  const handleRemoveInput = (index) => {
    const updatedInputs = [...inputs];
    updatedInputs.splice(index, 1);
    setInputs(updatedInputs);    
    onChange(updatedInputs); // Comunicar los cambios al componente padre

  };

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedInputs = [...inputs];
    updatedInputs[index] = { ...updatedInputs[index], [name]: value };
    setInputs(updatedInputs);
    onChange(updatedInputs); // Comunicar los cambios al componente padre

  };

  return (
    <>
      {inputs.map((input, index) => (
        <div className="inputProyectContainer" key={index}>
          <input
            type="text"
            className="InputDynamicProyects"
            name="titulo"
            placeholder="Título del proyecto"
            value={input.titulo || ""}
            maxLength={100}
            onChange={(e) => handleInputChange(index, e)}
          />
          <input
            type="text"
            className="InputDynamicProyects"
            name="descripcion"
            placeholder="Descripción del proyecto"
            value={input.descripcion || ""}
            maxLength={100}
            onChange={(e) => handleInputChange(index, e)}
          />
          <input
            type="text"
            className="InputDynamicProyects"
            name="enlaceImagen"
            placeholder="Link a imagen del proyecto"
            value={input.enlaceImagen || ""}
            maxLength={100}
            onChange={(e) => handleInputChange(index, e)}
          />
          <input
            type="text"
            className="InputDynamicProyects"
            name="enlaceAlProyecto"
            placeholder="Link enlace al proyecto"
            value={input.enlaceAlProyecto || ""}
            maxLength={100}
            onChange={(e) => handleInputChange(index, e)}
          />
          {inputs.length > 1 && (
            <button
              className="btnDynamicProyects removeButtonProyects"
              onClick={() => handleRemoveInput(index)}
            >
              Eliminar
            </button>
          )}
        </div>
      ))}
      <div className="alignButtonsProyects">
        <button className="btnDynamicProyects addButtonProyects" onClick={handleAddInput}>
          Agregar proyecto
        </button>
      </div>
    </>
  );
};

export default ProyectsC;
