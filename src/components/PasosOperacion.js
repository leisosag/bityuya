import React from "react";
import Card from "./Card";
import img1 from "../img/1.png";
import img2 from "../img/2.png";
import img3 from "../img/3.png";

const PasosOperacion = () => {
  return (
    <section id="pasos">
      <div className="container pt-5 pb-5">
        <div className="row text-center justify-content-center">
          <div className="col-md-10 texto-servicios">
            <h2>¿Cómo operar en Bityuya?</h2>
            <p>
              Hacemos de las cripto algo sencillo. Registrate y comenzá en
              minutos
            </p>
          </div>
        </div>
        <div className="row justify-content-center mt-5 mb-5">
          <div className="col-md-4">
            <Card
              titulo="Crea tu cuenta"
              texto="Registrate en pocos pasos en el sitio web o desde la app."
              imagen={img1}
            />
          </div>
          <div className="col-md-4">
            <Card
              titulo="Depositá"
              texto="Realizá tu depósito inicial
              mediante transferencia o
              Mercado Pago."
              imagen={img2}
            />
          </div>
          <div className="col-md-4">
            <Card
              titulo="Guardá, comprá y vendé"
              texto="Tu dinero en pesos,
              bitcoin y otras cripto.
              Usalo como quieras."
              imagen={img3}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PasosOperacion;
