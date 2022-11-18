import React from 'react'
import "./Introristorante.css"
import logoilristorante from "../../img/il ristorante.png"

const Introristorante = () => {
  return (
    <div className="intro-ristorante">
    <div className="box-intro-ristorante">
      <div className="box-logo">
        <img className="il-ristorante-logo" src={logoilristorante} alt="" />
      </div>
    </div>
  </div>
  )
}

export default Introristorante