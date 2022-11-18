import React from 'react'
import CardPrenota from '../../components/card-prenota/CardPrenota'
import Introprenota from '../../components/introprenota/Introprenota'
import "./Prenota.css"

const Prenota = () => {
  return (
    <div className="prenota">
      <Introprenota/>
      <CardPrenota/>
      
    </div>
  )
}

export default Prenota