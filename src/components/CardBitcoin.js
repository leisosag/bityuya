import React from 'react';
import './CardBitcoin.css';

const CardBitcoin = ({ coin }) => {
  return (
    <div>
      <div className="card p-1 mb-3">
        <div className="card-body bitcoin-card">
          <div className="titulo-card row mb-2">
            <div className="col-9">
              <h5 className="card-title mt-1">{coin.CoinInfo.FullName}</h5>
            </div>
            <div className="col-3">
              <img
                src={`https://www.cryptocompare.com${coin.CoinInfo.ImageUrl}`}
                alt="icono"
                width="40"
                height="40"
              />
            </div>
          </div>
          <div className="row pt-1 pb-1 d-flex">
            <div className="col stats">
              <p className="card-text mr-3">{coin.CoinInfo.Name}</p>
              <i className="fas fa-long-arrow-alt-down mr-1 stats-down"></i>
              <h6 className="card-text mr-3 stats-down">
                {coin.DISPLAY.USD.LOWDAY}
              </h6>
              <i className="fas fa-long-arrow-alt-up mr-1 stats-up"></i>
              <h6 className="card-text stats-up">{coin.DISPLAY.USD.HIGHDAY}</h6>
            </div>
          </div>
          <div className="row compra-venta">
            <div className="col text-center">
              <h5>Compra</h5>
              <h4 className="card-text">{coin.DISPLAY.USD.PRICE}</h4>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col text-center">
              <a
                href={`https://www.cryptocompare.com${coin.CoinInfo.Url}`}
                target="_blank"
              >
                <button className="btn btn-border-accent m-2">
                  Ver más información
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBitcoin;

/*
<div className="card p-1 mb-3">
      <div className="card-body bitcoin-card">
        <div className="titulo-card row mb-2">
          <div className="col-9">
            <h5 className="card-title mt-1">{titulo}</h5>
          </div>
          <div className="col-3">
            <img src={icono} alt="icono" width="40" height="40" />
          </div>
        </div>
        <div className="row pt-1 pb-1 d-flex">
          <div className="col-6 stats">
            <p className="card-text mr-3">{sigla}</p>
            <i className="fas fa-long-arrow-alt-down mr-1"></i>
            <h6 className="card-text">-2.42%</h6>
          </div>
        </div>
        <div className="row compra-venta">
          <div className="col-6 text-center">
            <h5>Compra</h5>
            <h4 className="card-text">$000</h4>
          </div>
          <div className="col-6 text-center">
            <h5>Venta</h5>
            <h4 className="card-text">$000</h4>
          </div>
        </div>
      </div>
      <button className="btn btn-border-accent m-2">Comprar</button>
    </div>
    */
