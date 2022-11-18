import React from 'react'
import "./Intromenu.css"
import menu from "../../img/menu.png"

const Intromenu = () => {
  return (
    <div className="intro-menu">
    <div className="box-intro">
      <div className="box-logo">
        <img className="il-bar-logo" src={menu} alt="" />
      </div>
    </div>
  </div>
  )
}

export default Intromenu