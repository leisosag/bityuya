import React from "react";
import CardBitcoin from "./CardBitcoin";
import BCH from "../img/BCH.png";
import BTC from "../img/BTC.png";
import CRO from "../img/CRO.PNG";
import DOT from "../img/DOT.png";
import ETH from "../img/ETH.png";
import LINK from "../img/LINK.png";
import LTC from "../img/LTC.PNG";
import USDT from "../img/USDT.png";
import XRP from "../img/XRP.png";
import XLM from "../img/XLM.png";

const CarouselBitcoins = () => {
  return (
    <div>
      <section id="carousel">
        <div className="container pt-5 pb-5">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <CardBitcoin titulo="Bitcoin" icono={BTC} sigla="BTC" />
            </div>
            <div className="col-lg-4 col-md-6">
              <CardBitcoin titulo="Ethereum" icono={ETH} sigla="ETH" />
            </div>
            <div className="col-lg-4 col-md-6">
              <CardBitcoin titulo="XRP" icono={XRP} sigla="XRP" />
            </div>
            <div className="col-lg-4 col-md-6">
              <CardBitcoin titulo="Tether" icono={USDT} sigla="USDT" />
            </div>
            <div className="col-lg-4 col-md-6">
              <CardBitcoin titulo="Chainlink" icono={LINK} sigla="LINK" />
            </div>
            <div className="col-lg-4 col-md-6">
              <CardBitcoin titulo="Stellar" icono={XLM} sigla="XLM" />
            </div>
            <div className="col-lg-4 col-md-6">
              <CardBitcoin titulo="Chain Token" icono={CRO} sigla="CRO" />
            </div>
            <div className="col-lg-4 col-md-6">
              <CardBitcoin titulo="Litecoin" icono={LTC} sigla="LTC" />
            </div>
            <div className="col-lg-4 col-md-6">
              <CardBitcoin titulo="Bitcoin Cash" icono={BCH} sigla="BCH" />
            </div>
            <div className="col-lg-4 col-md-6">
              <CardBitcoin titulo="Polkadot" icono={DOT} sigla="DOT" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarouselBitcoins;
