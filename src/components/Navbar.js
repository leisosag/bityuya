import React from "react";
import "./Navbar.css";
import Logo from "../img/logo.png";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand text-white" href="#">
            <img src={Logo} width="30" height="30" alt="" /> Bityuya
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Criptomonedas
                </a>
              </li>
              <li className="nav-item ml-2">
                <a className="nav-link text-white" href="#">
                  Cotización
                </a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <button
                className="btn btn-border-white my-2 my-sm-0 ml-3"
                type="submit"
              >
                Iniciar Sesión
              </button>
              <button
                className="btn btn-full-white my-2 my-sm-0 ml-3"
                type="submit"
              >
                Registrar
              </button>
            </form>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
