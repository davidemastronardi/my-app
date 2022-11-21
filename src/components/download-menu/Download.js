import React from "react";
import "./Download.css";
import menucarta from "../../img/menu autunno.pdf";
import menuapericena from "../../img/apericena inverno.pdf";
import menucocktal from "../../img/drink list inverno.pdf";

const Download = () => {
  
  const downloadmenucarta = () => {
    window.open(menucarta);
  };
  const downloadmenuapericena = () => {
    window.open(menuapericena);
  };
  const downloadmenucocktal = () => {
    window.open(menucocktal);
  };

  return (
    <div className="download">
      <div className="box-download">
        <h2 className="title-download">
          Download del menu alla carta in formato PDF
        </h2>
        <div className="button-dowload">
          <button
            className="btn btn-secondary button-dow"
            onClick={downloadmenucarta}
          >
            MENU ALLA CARTA
          </button>
        </div>
      </div>
    </div>
  );
};

export default Download;
