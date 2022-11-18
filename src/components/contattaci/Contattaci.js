import React from "react";
import "../contattaci/Contattaci.css";
import map from "../../img/map.png";
import email from "../../img/email.png";
import phone from "../../img/phone.png";

const Contattaci = () => {
  return (
    <div className="contattaci">
      <div className="bk-contatti">
        <div className="overlay"></div>
        <div className="wrap">
          <div className="box-contattaci-home">
            <h1>CONTATTACI</h1>
            <p className="size-30">Vieni a trovarci!</p>
          </div>
          <div className="box-contatti">
            <div className="card">
              <a href="https://wa.me/3899999788">
                <img className="img" src={phone} alt="" />
              </a>
              <h2>Chiamaci</h2>
              <p className="font">389 9999788</p>
            </div>
            <div className="card">
              <a href="https://www.google.com/maps/place/En%C2%BFgma+Cocktail+%26+Restaurant/@44.7593061,8.7856663,17z/data=!3m1!4b1!4m5!3m4!1s0x478767b8f10b86ef:0xa4a334327362a01a!8m2!3d44.7593061!4d8.7856663">
                <img className="img" src={map} alt="" />
              </a>
              <h2>Dove siamo</h2>
              <p className="font">
                Via Niccolò Girardengo 11 <br />
                15067 Novi Ligure
              </p>
            </div>
            <div className="card">
              <a href="mailto:info@enigmarestaurant.it">
                <img className="img" src={email} alt="" />
              </a>
              <h2>Email</h2>
              <p className="font">info@enigmarestaurant.it</p>
            </div>
          </div>
        </div>
      </div>
      <div className="box-saluti">
        <p>ENIGMA COCKTAIL & RESTAURANT</p>
        <h1>Vieni a trovarci, ti aspettiamo!</h1>
      </div>
      <div className="box-faq">
        <ul className="termini">
          <li>
            <a href="http://"></a>FAQ
          </li>
          <li>
            <a href="http://"></a>TERMS
          </li>
          <li>
            <a href="http://"></a>PRIVACY
          </li>
          <li>
            <a href="http://"></a>RETURNS
          </li>
        </ul>
        <div className="reserved">
          <p>© 2022 ENIGMA. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </div>
  );
};

export default Contattaci;
