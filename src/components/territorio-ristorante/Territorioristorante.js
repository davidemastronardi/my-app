import React from "react";
import "./Territorioristorante.css";
import ilterritorio2 from "../../img/il territorio2.png";
import ilristorante2 from "../../img/il ristorante2.png";
import risotto from "../../img/risotto.jpg";
import menu2 from "../../img/menu2.png";

const Territorioristorante = () => {
  return (
    <div className="territorio">
      <div className="container-ter">
        <div className="wrap-ter">
          <div className="content-ter territorio-left">
            <img className="img-territorio" src={ilterritorio2} alt="" />
          </div>
          <div className="content-ter riga">
            <div>
              Il Piemonte è una terra di ottimi vini e di buon cibo preparato
              secondo le tradizioni popolari, che può soddisfare ogni tipo di
              palato.
            </div>
            <div>
              La città di Alessandria ricopre un diversificato patrimonio
              storico, artistico ed enogastronomico legato al territorio alla
              cultura popolare.
            </div>
            <div>
              Le ricette della cucina alessandrina fanno parte della tradizione
              popolare del Monferrato, ma hanno anche tanti punti in comune con
              la cucina ligure e la cucina provenzale.
            </div>
            <div>
              Il nostro ristorante vuole proporre ciò che la cucina territoriale
              ha da regalarci, in una chiave innovativa e giovanile.
            </div>
            <div>Buon viaggio e buon appetito.</div>
          </div>
        </div>
      </div>
      <div className="container-ter">
        <div className="wrap-ter reverse">
          <div className="content-ter territorio-left">
            <img className="img-territorio" src={ilristorante2} alt="" />
          </div>
          <div className="content-ter riga">
            <div>
              Da Giugno del 2022 l’Enigma Cocktail&Restaurant, apre con
              l’obiettivo di donare agli abitanti della città di Novi Ligure e
              della provincia di Alessandria, una cucina radicata profondamente
              nel territorio, con uno sguardo all’innovazione.
            </div>
            <div>
              Un locale rivoluzionario ed elegante, il posto giusto dove gustare
              un calice di vino locale e un piatto ricercato.
            </div>
          </div>
        </div>
      </div>
      <div className="container-ter">
        <div className="wrap-ter2">
          <div className="content-ter-ristorante territorio-left">
            <img className="img-menu2" src={menu2} alt="menu2" />
            <p className="riga2">
              La cucina territoriale, tipica piemontese e alessandrina,
              rivisitata in chiave odierna ed originale. Ai nostri chef piace il
              connubio tra il tradizionale e l’innovazione.{" "}
            </p>
            <div className="button-kmzero">
              <button className="btn btn-secondary ">MENU</button>
            </div>
          </div>
          <div className="content-ter">
            <img className="img-risotto" src={risotto} alt="risotto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Territorioristorante;
