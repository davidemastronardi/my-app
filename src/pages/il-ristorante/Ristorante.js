import React, { useRef, useState, createContext } from "react";
import Cardristorante from "../../components/card-ristorante/Cardristorante";
import Introristorante from "../../components/introristorante/Introristorante";
import Territorioristorante from "../../components/territorio-ristorante/Territorioristorante";
import "./Ristorante.css";

export const ScrollPage=createContext(null)
const Ristorante = () => {
  const [scroll, setScroll] = useState("ciao");
  return (
    <ScrollPage.Provider value={{scroll,setScroll}}>

    <div className="ristorante">
      <div className="intro-ristorante">
        <Introristorante />
      </div>
      <div className="wrap-cardristorante">
        <div className="cardristorante">
          <Cardristorante />
        </div>
      </div>
      <div className="territorioristorante">
        <Territorioristorante />
      </div>
    </div>
    </ScrollPage.Provider>
  );
};

export default Ristorante;
