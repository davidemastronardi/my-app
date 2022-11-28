import React from "react";
import "../introHome/Introhome.css";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";

const Introhome = () => {
  return (
    <div className="introhome">
      <div className="box-intro animate__animated animate__fadeInLeft">
        <div className="box-logo">
          <img className="logo-intro" src={logo} alt="" />
        </div>
        <div className="box-text-logo">
          <p className="restaurant">Cocktail & Restaurant</p>
        </div>
        <div className="box-text">
          <p className="testo">
            L’<strong>Enigma Cocktail&Restaurant</strong> offre una cucina
            Piemontese, tipica Alessandrina contemporanea, prestando attenzione
            all’immagine ed alla qualità dei propri prodotti, qui potrai trovare
            drink abbinati alle pietanze, aperitivi ed apericena.
          </p>
        </div>
        <div className="box-button-intro">
          <Link className="btn btn-primary" to="/il-menu">
            MENU
          </Link>
          <Link className="btn btn-secondary" to="/prenota">
            PRENOTA ORA
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Introhome;
