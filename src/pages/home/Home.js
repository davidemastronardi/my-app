import React from "react";
import Introhome from "../../components/introHome/Introhome";
import Orari from "../../components/orari/Orari";
import "./Home.css";
import Sapori from "../../components/sapori/Sapori";
import Carousel from "../../components/carousel/Carousel";

const Home = () => {
  return (
    <div className="home">
      <header>
        <div className="introhome"><Introhome /></div>
        <div className="orari"><Orari/></div>
        <div className="sapori-territorio"><Sapori/></div>
        <div className="carosel"><Carousel/></div>
      </header>
    </div>
  );
};

export default Home;
