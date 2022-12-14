import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import MenuItem from "../../components/menu-item/MenuItem";
import "./Piatti.css";

const Piatti = () => {
  const [antipasti, setAntipasti] = useState([]);
  const [primi, setPrimi] = useState([]);
  const [secondi, setSecondi] = useState([]);
  const [dolci, setDolci] = useState([]);
  const [aperitivo, setAperitivo] = useState([]);
  const [alcolici, setAlcolici] = useState([]);

  const menuallacarta = useRef();
  const apericena = useRef();
  const cocktail = useRef();

  const getAntipasti = () => {
    fetch("http://localhost:3001/api/antipasti")
      .then((res) => res.json())
      .then((data) => {
        setAntipasti(data.data);
      });
  };

  const getPrimi = () => {
    fetch("http://localhost:3001/api/primi")
      .then((res) => res.json())
      .then((obj) => {
        setPrimi(obj.data);
      });
  };

  const getSecondi = () => {
    fetch("http://localhost:3001/api/secondi")
      .then((res) => res.json())
      .then((obj) => {
        setSecondi(obj.data);
      });
  };
  const getDolci = () => {
    fetch("http://localhost:3001/api/dolci")
      .then((res) => res.json())
      .then((obj) => {
        setDolci(obj.data);
      });
  };
  const getAperitivo = () => {
    fetch("http://localhost:3001/api/apericene")
      .then((res) => res.json())
      .then((obj) => {
        setAperitivo(obj.data);
      });
  };
  const getAlcolici = () => {
    fetch("http://localhost:3001/api/cocktails")
      .then((res) => res.json())
      .then((obj) => {
        setAlcolici(obj.data);
      });
  };

  useEffect(() => {

    getAntipasti();
    getPrimi();
    getSecondi();
    getDolci();
    getAperitivo();
    getAlcolici();

  }, []);


  const renderAntipasti = () => {
    return antipasti.map((dati, i) => {
      return <MenuItem key={i} dati={dati} />;
    });
  };

  const renderPrimi = () => {
    return primi.map((dati, i) => {
      return <MenuItem key={i} dati={dati} />;
    });
  };
  const renderSecondi = () => {
    return secondi.map((dati, i) => {
      return <MenuItem key={i} dati={dati} />;
    });
  };
  const renderDolci = () => {
    return dolci.map((dati, i) => {
      return <MenuItem key={i} dati={dati} />;
    });
  };
  const renderAperitivo = () => {
    return aperitivo.map((dati, i) => {
      return <MenuItem key={i} dati={dati} />;
    });
  };
  const renderAlcolici = () => {
    return alcolici.map((dati, i) => {
      return <MenuItem key={i} dati={dati} />;
    });
  };

  const scrollmenu = (element) => {
    window.scrollTo({
      top: element.current.offsetTop - 120,
      behavior: "smooth",
      block: "",
    });
  };

  return (
    <div className="piatti">
      <div className="box-button-section">
        <button
          className="btn-secondary"
          onClick={() => {
            scrollmenu(menuallacarta);
          }}
        >
          MENU ALLA CARTA
        </button>
        <button
          className="btn-secondary"
          onClick={() => {
            scrollmenu(apericena);
          }}
        >
          APERICENA
        </button>
        <button
          className="btn-secondary"
          onClick={() => {
            scrollmenu(cocktail);
          }}
        >
          COCKTAIL
        </button>
      </div>
      <div className="box-entree-antipasti">
        <div className="cont-entree" ref={menuallacarta}>
          <h1 className="title-entree">Entreè</h1>
          <p className="text-entree">di benvenuto</p>
        </div>
        <div className="cont-title">
          <h1 className="title-descrizione-entree">L'autunno</h1>
          <p className="text-entree">foglia di vite</p>
        </div>
        <div className="cont-descrizione">
          <p className="text-entree">
            Foglia di vite e Robiola tartufata, polvere di funghi, pomodoro e
            salvia.
          </p>
        </div>
        <div className="box-portate">
          <div className="cont-entree">
            <h1 className="title-entree">Antipasti</h1>
            <p className="text-entree">per iniziare</p>
          </div>
          <div className="antipasti">{renderAntipasti()}</div>
        </div>
      </div>
      <div className="box-primi">
        <div className="cont-entree">
          <h1 className="title-entree">Primi</h1>
          <p className="text-entree">piatti</p>
        </div>
        <div className="primi">{renderPrimi()}</div>
      </div>
      <div className="box-secondi">
        <div className="cont-entree">
          <h1 className="title-entree">Secondi</h1>
          <p className="text-entree">piatti</p>
        </div>
        <div className="secondi">{renderSecondi()}</div>
      </div>
      <div className="box-dolci">
        <div className="cont-entree">
          <h1 className="title-entree">Dolci</h1>
          <p className="text-entree">chiusura in dolcezza</p>
        </div>
        <div className="dolci">{renderDolci()}</div>
      </div>
      <div className="box-apericena">
        <div className="cont-entree" ref={apericena}>
          <h1 className="title-entree">Apericena</h1>
          <p className="text-entree">per iniziare</p>
        </div>
        <div className="apericena">
          {renderAperitivo()}
        </div>
      </div>
      <div className="box-cocktail">
        <div className="cont-entree" ref={cocktail}>
          <h1 className="title-entree">Cocktail</h1>
          <p className="text-entree">per accompagnare</p>
        </div>
        <div className="cocktail">
        {renderAlcolici()}
        </div>
      </div>
    </div>
  );
};

export default Piatti;
