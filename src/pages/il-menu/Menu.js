import React from "react";
import Intromenu from "../../components/intromenu/Intromenu";
import Piatti from "../../components/piatti-menu/Piatti";
import Ringrazieamentimenu from "../../components/rigraziamentimenu/Ringrazieamentimenu";
import "./Menu.css";

const Menu = () => {
  return (
 <div className="menu">
  <Intromenu/>
  <Ringrazieamentimenu/>
  <Piatti/>
 </div>
  );
};

export default Menu;
