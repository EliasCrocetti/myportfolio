import { useState } from 'react';
import './Contact.css';

const ContactForm = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  console.log("props", props)

  const handleSubmit = (e) => {
    e.preventDefault();
    // Agrega aquí la lógica para enviar el formulario de contacto
    console.log('Formulario enviado:', { name, email, message });
    // Restablece los campos después de enviar el formulario
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <br />
      <label>
        Correo electrónico:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <br />
      <label>
        Mensaje:
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;
