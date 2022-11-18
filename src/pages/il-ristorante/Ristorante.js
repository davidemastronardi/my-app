import React from "react";
import Cardristorante from "../../components/card-ristorante/Cardristorante";
import Introristorante from "../../components/introristorante/Introristorante";
import Territorioristorante from "../../components/territorio-ristorante/Territorioristorante";
import IlTerritorio from "../../components/territorio/IlTerritorio";
import "./Ristorante.css";

const Ristorante = () => {
  return (
    <div className="ristorante">
      <div className="intro-ristorante">
        <Introristorante />
      </div>
      <div className="wrap-cardristorante">
        <div className="cardristorante">
          <Cardristorante />
        </div>
      </div>
     <div className="territorioristorante">
     <Territorioristorante />
     </div>
    </div>
  );
};

export default Ristorante;
