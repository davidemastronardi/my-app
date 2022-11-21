import React, { useContext, useEffect, useRef } from "react";
import "./Cardristorante.css";
import cena2 from "../../img/cena2.png";
import apericena from "../../img/apericena.png";
import vinobar from "../../img/vinobar.png";
import { Link } from "react-router-dom";
import cartavini from "../../img/carta vini.pdf";
import {ScrollPage} from "../../pages/il-ristorante/Ristorante";

const Cardristorante = () => {
  const {scroll} = useContext(ScrollPage);
  

  const scrollpage = (element) =>{
    window.scrollTo({top: element.current.offsetTop - 120, behavior: 'smooth', block:''});
  }

  const downloadcartavini = () => {
    window.open(cartavini);
  };

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
          <Link to="/il-menu" className="btn btn-primary button">
            IL MENU
          </Link>
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
          <button className="btn btn-secondary button" onClick={()=>{scrollpage(scroll.territorio)}}>IL TERRITORIO</button>
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
          <button className="btn btn-primary button" onClick={downloadcartavini}>
            LA CANTINA
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cardristorante;
