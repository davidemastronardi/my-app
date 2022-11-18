import React from 'react'
import "./Halloween.css"
import ragno from "../../img/ragno.png"
import ragno2 from "../../img/ragno2.png"
import zucca from "../../img/zucche.png"

const Halloween = () => {
  return (
    <div className="halloween">
        <div className="ragnatela">
            <img className='ragno' src={ragno} alt="" />
            <img className='ragno2' src={ragno2} alt="" />
        </div>
        <div className="zucche">
            <img className='zucca' src={zucca} alt="" />
        </div>
    </div>
  )
}

export default Halloween