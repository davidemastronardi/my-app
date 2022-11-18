import React, { useState } from "react";
import "./CardBar.css";
import drink from "../../img/drink.png";
import apericena from "../../img/apericena.png";
import vinobar from "../../img/vinobar.png";


const CardBar = () => {


  return (
    <div className="card-bar">
      <div className="box-card box-card-drink">
        <div className="img-drink">
          <img className="drink" src={drink} alt="" />
        </div>
        <div className="title-drink">
          <h2>Cocktail Nostrani</h2>
        </div>
        <div className="text-drink">
          <p>
            Il nostro locale propone, grandi classici del Bar, rivisitati con
            distillati del territorio, oltre che a numerosi Gin e altri
            distillati pregiati.
          </p>
        </div>
        <div className="button">
          <button className="button-drink">DRINK LIST</button>
        </div>
      </div>
      <div className="box-card box-card-apericena">
        <div className="img-drink">
          <img className="drink" src={apericena} alt="" />
        </div>
        <div className="title-drink">
          <h2>Apericena</h2>
        </div>
        <div className="text-drink">
          <p>
            Il vino, il buon cibo e le materie prime di qualità e a km0 sono ciò
            che caratterizzano maggiormente il nostro territorio. Il nostro Bar
            propone diversi taglieri di salumi e formaggi, oltre che a primi
            piatti caldi.
          </p>
        </div>
        <div className="button">
          <button className="button-apericena">APERICENA</button>
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

export default CardBar;
