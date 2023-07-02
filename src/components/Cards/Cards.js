import React from 'react';
import './Cards.css';

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.imageUrl} alt="Imagen de la tarjeta" className="card-img" />
      <div className="card-content">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-text">{props.content}</p>
        <a href={props.link} className="card-link">Enlace</a>
      </div>
    </div>
  );
};

export default Card;
