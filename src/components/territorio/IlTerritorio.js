import React from "react";
import "./IlTerritorio.css";
import ilTerritorio from "../../img/il territorio.png";
import kmZero from "../../img/km zero.png";
import negroni from "../../img/negroni.jpg";

const IlTerritorio = () => {
  return (
    <div className="territorio">
      <div className="container-ter">
        <div className="wrap-ter">
          <div className="content-ter territorio-left">
            <img className="img-territorio" src={ilTerritorio} alt="" />
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
              I grandi vini locali fanno parte della tradizione popolare del
              Monferrato, ma anche i distillati non sono da sottovalutare.
            </div>
            <div>
              Il nostro bar vuole proporre grandi classici,icone dell’aperitivo
              con ciò che le cantine territoriali hanno da regalarci, in una
              chiave innovativa e giovanile.
            </div>
            <div>Buon viaggio e buon CinCin.</div>
          </div>
        </div>
      </div>
      <div className="container-ter">
        <div className="wrap-ter2 reverse">
          <div className="content-ter2 territorio-left">
            <img className="img-kmzero" src={kmZero} alt="" />
            <p className="riga2">
              Vini tipici piemontesi e della provincia alessandrina, cocktail in
              chiave odierna ed originale utilizzando prodotti locali. Ai nostri
              barman piace il connubio tra il tradizionale e l’innovazione.{" "}
            </p>
          </div>
          <div className="content-ter">
            <img className="img-negroni" src={negroni} alt="negroni" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IlTerritorio;
