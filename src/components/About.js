import React from "react";
import "./About.css";
import about from "../img/about.png";

const About = () => {
  return (
    <section id="about">
      <div className="container texto-about pt-5 pb-5">
        <div className="row">
          <div className="col-md-6 d-flex flex-column align-items-start justify-content-center texto-header mb-5">
            <h1 className="width80">
              Somos tu puerta de acceso al mundo cripto
            </h1>
            <p className="width80">
              Te damos todas las herramientas para que puedas comprar, vender,
              guardar y enviar criptomonedas de forma rápida y fácil las 24hs,
              todos los días del año.
            </p>
          </div>
          <div className="col-md-6 img-container mb-5">
            <img src={about} alt="portada" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
