import React, { useState } from "react";
import "../navbar/Navbar.css";
import logo from "../../img/logo.png";
import hamburger from "../../img/hamburger.svg";
import x from "../../img/x.svg";
import phone from "../../img/phone.png";
import facebook from "../../img/facebook.png";
import instagram from "../../img/instagram.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activateNavbar = () => {
    setIsOpen(true);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <div className="navbar">
      <div className="box-navbar">
        <div className="cont-logo">
          <img
            className="logo-nav animate__animated animate__backInLeft"
            src={logo}
            alt=""
          />
        </div>
        <div className="cont-pages">
          <ul>
            <li className="animate__animated animate__backInDown">
              <Link to="/">Home</Link>
            </li>
            <li className="animate__animated animate__backInDown ">
              <Link to="/il-bar">Il Bar</Link>
            </li>
            <li className="animate__animated animate__backInDown">
              <Link to="/il-ristorante">Il Ristorante</Link>
            </li>
            <li className="animate__animated animate__backInDown">
              <Link to="/il-menu">Menu</Link>
            </li>
            <li className="animate__animated animate__backInDown">
              <Link to="/prenota">Prenota</Link>
            </li>
          </ul>
        </div>

        <div className="cont-hamburger">
          {!isOpen && (
            <img
              onClick={activateNavbar}
              className="hamburger"
              src={hamburger}
              alt="menu"
            />
          )}
          {isOpen && (
            <img
              onClick={closeNavbar}
              className="hamburger x"
              src={x}
              alt="x"
            />
          )}
        </div>
        <div className="cont-social">
          <a href="https://wa.me/3899999788">
            <img className="social animate__animated animate__backInRight" src={phone} alt="phone" />
          </a>
          <a href="https://www.facebook.com/mogsnc">
            <img className="social animate__animated animate__backInRight" src={facebook} alt="facebook" />
          </a>
          <a href="https://www.instagram.com/enigma_cocktail_restaurant/">
            <img className="social animate__animated animate__backInRight" src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
      <div className={`box-menu-hamburger ${isOpen ? "collapse" : ""}`}>
        <div className="menu-ul">
          <ul>
            <li>
              <Link onClick={closeNavbar} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={closeNavbar} to="/il-bar">
                Il Bar
              </Link>
            </li>
            <li>
              <Link onClick={closeNavbar} to="/il-ristorante">
                Il Ristorante
              </Link>
            </li>
            <li>
              <Link onClick={closeNavbar} to="/il-menu">
                Menu
              </Link>
            </li>
            <li>
              <Link onClick={closeNavbar} to="/prenota">
                Prenota
              </Link>
            </li>
          </ul>
          <div className="cont-social-ul">
            <a href="https://wa.me/3899999788">
              <img className="social" src={phone} alt="phone" />
            </a>
            <a href="https://www.facebook.com/mogsnc">
              <img className="social" src={facebook} alt="facebook" />
            </a>
            <a href="https://www.instagram.com/enigma_cocktail_restaurant/">
              <img className="social" src={instagram} alt="instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
