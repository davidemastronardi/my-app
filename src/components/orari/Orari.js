import React from "react";
import "../orari/Orari.css";
import aperitivo from "../../img/aperitivo.png"
import orologio from "../../img/orologio.png"
import cena from "../../img/cena.png"

const Orari = () => {
  return (
    <div className="orari">
      <div className="box-orari">
        <img className="img" src={aperitivo} alt="" />
        <div className="cont-text bianco">
          <h2 className="title">Aperitivo</h2>
          <p>
            Dalle 18.00 in poi, l'Enigma apre le porte del suo aperitivo a base
            di prodotti  del territorio, con enoteca e cucina tipica
            regionale. 
          </p>
        </div>
      </div>
      <div className="box-orari">
        <img className="img" src={orologio} alt="" />
        <div className="cont-text blak">
          <h2 className="title">Orari di apertura</h2>
          <p>
            Lunedì: 18 - 01 <br />
            Mercoledì - Domenica: 18 -01 <br />
            Martedì: chiuso
          </p>
        </div>
      </div>
      <div className="box-orari">
        <img className="img" src={cena} alt="" />
        <div className="cont-text bianco">
          <h2 className="title">Cene ed eventi</h2>
          <p>
            All'<strong>Enigma Cocktail&Restaurant</strong> troverete l'ambiente ideale per le
            vostre  cene, feste private, meeting aziendali e servizi catering.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Orari;
