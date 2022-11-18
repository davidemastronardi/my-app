import React from "react";
import "./Introilbar.css";
import ilBar from "../../img/Il bar.png";

const Introilbar = () => {
  return (
    <div className="intro-bar">
      <div className="box-intro">
        <div className="box-logo">
          <img className="il-bar-logo" src={ilBar} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Introilbar;
