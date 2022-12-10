import React from "react";

const menuItem = ({ dati }) => {
  return (
    <div className="cont-title-descrizione">
      <h1 className="title-descrizione-entree">{dati.attributes.title}</h1>
      <p className="text-entree">{dati.attributes.subtitle}</p>
      <div className="cont-descrizione">
        <p className="text-entree">{dati.attributes.description}</p>
      </div>
    </div>
  );
};

export default menuItem;
