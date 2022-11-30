import React from 'react'
import "./Introprenota.css"
import prenotalogo from "../../img/prenota.png"

const Introprenota = () => {
  return (
    <div className="introprenota">
           <div className="box-intro">
        <div className="box-logo">
          <img className="prenota-logo animate__animated animate__fadeInDown" src={prenotalogo} alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default Introprenota