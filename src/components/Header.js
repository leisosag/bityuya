import React from 'react';
import './Header.css';
import header from '../img/header.png';

const Header = () => {
  return (
    <section id="header">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 d-flex flex-column justify-content-center align-items-start texto-header mb-5">
            <h1 className="text-white">Evolucioná tu dinero</h1>
            <p className="text-white">
              Comprá y vendé criptomonedas de la manera más simple.
            </p>
            <button className="btn btn-border-white">Empezar</button>
          </div>
          <div className="col-lg-6 img-container mb-5">
            <img src={header} alt="portada" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
