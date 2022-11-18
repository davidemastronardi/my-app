import React from "react";
import "./Sapori.css";

const Sapori = () => {
  return (
    <div className="container">
      <div className="sapori">
        <div className="wrap">
          <div className="content left">
            <div className="img1"></div>
            <div className="img2"></div>
          </div>
          <div className="content">
            <h1 className="title-sapori">
              SAPORI DEL TERRITORIO <div className="right"></div>
            </h1>
            <div className="filosofia paragrafo">
              <h2>FILOSOFIA</h2>
              <p className="font">
                <strong>
                  Il più grande enigma dell’uomo rimane scoprire se stesso.{" "}
                </strong>
              </p>
              <p>
                I luoghi, le esperienze e le persone attorno a noi sono gli
                unici indizi a disposizione per provare a comprendere questo
                mistero.{" "}
              </p>
              <p>
                Con la nostra cucina e le nostre proposte, vogliamo svelarvi
                quanto di buono c’è nelle nostre terre.
              </p>
            </div>
            <div className="paragrafo cucina">
              <h2>LA CUCINA</h2>
              <p className="font">
                Da Giugno del 2022 l’<strong>Enigma Cocktail&Restaurant</strong>
                , apre con l’obiettivo di donare agli abitanti della città di
                Novi Ligure e della provincia di Alessandria, una cucina
                radicata profondamente nel territorio, con uno sguardo
                all’innovazione.{" "}
              </p>
            </div>
            <div className="buttom">
        <div className="img-buttom2"></div>
      </div>
            <div className="paragrafo enoteca">
              <h2>ENOTECA LOCALE</h2>
              <p className="font">
                Le diverse zone del territorio del Piemonte ci regalano una
                tipicità unica dei vini piemontesi. La grande forza di questo
                territorio sta proprio in questa caratteristica, la capacità di
                donare prodotti buoni e diversificati.{" "}
              </p>
            </div>
            <div className="paragrafo cocktail">
              <h2>COCKTAIL NOSTRANI</h2>
              <p className="font">
                La provincia di Alessandria, oltre che ad ottimi cibi e vini
                offre anche numerosi distillati, perfetti per la miscelazione,
                Enigma racconta il proprio territorio anche attraverso i
                cocktail.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="buttom">
        <div className="img-buttom1"></div>
      </div>
    </div>
  );
};

export default Sapori;
