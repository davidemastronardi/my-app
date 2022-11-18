import React from 'react'
import "./Introprenota.css"
import prenotalogo from "../../img/prenota.png"

const Introprenota = () => {
  return (
    <div className="introprenota">
           <div className="box-intro">
        <div className="box-logo">
          <img className="prenota-logo" src={prenotalogo} alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default Introprenota