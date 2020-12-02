import React from "react";
import "./Card.css";

const Card = ({ titulo, texto, imagen }) => {
  return (
    <div className="card p-3 mb-3">
      <div className="card-body mt-2 mb-2">
        <div className="titulo-card d-flex">
          <img src={imagen} alt="icono" width="30" height="30" />
          <h5 className="card-title mt-1 ml-2">{titulo}</h5>
        </div>
        <p className="card-text mt-3">{texto}</p>
      </div>
    </div>
  );
};

export default Card;
