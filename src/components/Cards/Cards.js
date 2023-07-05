import React from 'react';
import './Cards.css';

const Card = (props) => {
  return (
    <div className="card">
        {
            !props.imageUrl ?
            (
                <img src={props.imageUrl} alt="Imagen de la tarjeta" className="card-img" />
            )
            :
            (
                <img src='https://c4.wallpaperflare.com/wallpaper/60/254/399/dragon-ball-z-son-goku-gohan-dragon-ball-wallpaper-preview.jpg' alt="Imagen de la tarjeta" className="card-img" />
            )
        }
      <div className="card-content">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-text">{props.content}</p>
        <a href={props.link} className="card-link">Enlace</a>
      </div>
    </div>
  );
};

export default Card;
