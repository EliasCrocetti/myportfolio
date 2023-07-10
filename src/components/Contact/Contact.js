import { useState } from 'react';
import './Contact.css';

const ContactForm = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // reestablecer los campos antes de enviar el formulario
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
