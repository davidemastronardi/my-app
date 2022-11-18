import React from "react";
import CardBar from "../../components/card-bar/CardBar";
import Introilbar from "../../components/introilbar/Introilbar";
import IlTerritorio from "../../components/territorio/IlTerritorio";
import "./Ilbar.css";

const Ilbar = () => {
  return (
    <div className="il-bar">
      <Introilbar />
      <div className="wrap-cardbar">
        <div className="cardbar">
          <CardBar />
        </div>
      </div>
      <div className="territorio">
        <IlTerritorio />
      </div>
    </div>
  );
};

export default Ilbar;
