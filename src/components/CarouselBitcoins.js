import React from 'react';
import CardBitcoin from './CardBitcoin';
import './About.css';

const CarouselBitcoins = ({ coins }) => {
  const renderedList = coins.map((coin) => {
    return (
      <div className="col-lg-4 col-md-6">
        <CardBitcoin coin={coin} />
      </div>
    );
  });

  return (
    <div>
      <section id="carousel">
        <div className="container pt-5 pb-5 texto-crypto">
          <h1 className="text-center mb-5 ">Nuestras Crypto</h1>
          <div className="row justify-content-center">{renderedList}</div>
        </div>
      </section>
    </div>
  );
};

/*
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
            </div>*
            */

export default CarouselBitcoins;
