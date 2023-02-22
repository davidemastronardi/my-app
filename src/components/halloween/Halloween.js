import React from "react";
import "./Halloween.css";
import ragno from "../../img/ragno.png";
import ragno2 from "../../img/ragno2.png";
import { isHalloween } from "../../utils/functions";

const Halloween = () => {
  return (
    <>
      {isHalloween() &&
        (<div className="halloween">
          <img className="ragno" src={ragno} alt="" />
          <img className="ragno2" src={ragno2} alt="" />
        </div>)
      }
    </>
  );
};

export default Halloween;
