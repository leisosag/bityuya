import React from "react";
import Card from "./Card";
import "./ServiciosContainer.css";
import billetera from "../img/billetera.png";
import ahorro from "../img/ahorro.png";
import bolsa from "../img/bolsa.png";

const ServiciosContainer = () => {
  return (
    <section id="servicios">
      <div className="container pt-5 pb-5">
        <div className="row justify-content-center text-center mt-5 mb-5">
          <div className="col-md-10 texto-servicios">
            <h2>Potenciá tus ahorros</h2>
            <p>
              Tenemos un producto para cada una de tus necesidades financieras
            </p>
          </div>
        </div>
        <div className="row justify-content-center  mt-5 mb-5">
          <div className="col-md-4">
            <Card
              titulo="Depositá pesos"
              texto="Fondeá tu cuenta por transferencia bancaria, Mercado Pago o efectivo."
              imagen={billetera}
            />
          </div>
          <div className="col-md-4">
            <Card
              titulo="Comprá cripto"
              texto="Accedé a bitcoins y otros activos digitales en pocos pasos."
              imagen={bolsa}
            />
          </div>
          <div className="col-md-4">
            <Card
              titulo="Gestioná tus fondos"
              texto="Guardá y enviá tus cripto o retirá tus fondos cuando quieras."
              imagen={ahorro}
            />
          </div>
        </div>
        <div className="row justify-content-center text-center">
          <div className="col-md-10 mt-5 mb-5">
            <button className="btn btn-border-accent">Más información</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiciosContainer;
