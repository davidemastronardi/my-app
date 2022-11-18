import React from "react";
import "./Cardristorante.css";
import cena2 from "../../img/cena2.png"
import apericena from "../../img/apericena.png"
import vinobar from "../../img/vinobar.png"

const Cardristorante = () => {
  return (
    <div className="card-bar">
      <div className="box-card box-card-drink">
        <div className="img-drink">
          <img className="drink" src={cena2} alt="" />
        </div>
        <div className="title-drink">
          <h2>Tradizionale rivisitato</h2>
        </div>
        <div className="text-drink">
          <p>
            Il nostro locale rispecchia la cucina del territorio e la rinnova.
            Il nostro menu si affida alle ricette della tradizione rivisitandole
            con ciò che il globo ha da offrirci.
          </p>
        </div>
        <div className="button">
          <button className="button-drink">MENU</button>
        </div>
      </div>
      <div className="box-card box-card-apericena">
        <div className="img-drink">
          <img className="drink" src={apericena} alt="" />
        </div>
        <div className="title-drink">
          <h2>Cucina territoriale</h2>
        </div>
        <div className="text-drink">
          <p>
            Il vino, il buon cibo e le materie prime di qualità e a km0 sono ciò
            che caratterizzano maggiormente il nostro territorio. Il nostro chef
            abbina i prodotti del nostro territorio a prodotti nuovi da tutto il
            mondo.
          </p>
        </div>
        <div className="button">
          <button className="button-apericena">IL TERRITORIO</button>
        </div>
      </div>
      <div className="box-card box-card-cantina">
        <div className="img-drink">
          <img className="drink" src={vinobar} alt="" />
        </div>
        <div className="title-drink">
          <h2>Vini del territorio</h2>
        </div>
        <div className="text-drink">
          <p>
            La nostra cantina ha da offrire principalmente i vini del nostro
            territorio, delle Langhe e della provincia del Monferrato. Non vi
            resta che provarli.
          </p>
        </div>
        <div className="button">
          <button className="button-drink">LA CANTINA</button>
        </div>
      </div>
    </div>
  );
};

export default Cardristorante;
