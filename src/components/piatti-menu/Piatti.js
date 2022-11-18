import React, { useRef } from "react";
import "./Piatti.css";

const Piatti = () => {

const menuallacarta=useRef()
const apericena=useRef()
const cocktail=useRef()

const scrollmenu = (element) =>{
  window.scrollTo({top: element.current.offsetTop - 120, behavior: 'smooth', block:''});
  console.log(element);
}

  return (
    <div className="piatti">
      <div className="box-button-section">
        <button className="btn-secondary" onClick={()=>{scrollmenu(menuallacarta)}}>MENU ALLA CARTA</button>
        <button className="btn-secondary" onClick={()=>{scrollmenu(apericena)}}>APERICENA</button>
        <button className="btn-secondary" onClick={()=>{scrollmenu(cocktail)}}>COCKTAIL</button>
      </div>
      <div className="box-entree-antipasti"  >
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
          <div className="antipasti">
            <div className="cont-title-descrizione">
              <h1 className="title-descrizione-entree">Finto peperone</h1>
              <p className="text-entree">la bagna cauda</p>
              <div className="cont-descrizione">
                <p className="text-entree">
                  Crema di patate e acciughe, sedano, gel peperone rosso
                  arrostito.
                </p>
              </div>
            </div>
            <div className="cont-title-descrizione">
              <h1 className="title-descrizione-entree">Vitello tonnato</h1>
              <p className="text-entree">orientale</p>
              <div className="cont-descrizione">
                <p className="text-entree">
                  Fiore e polvere di capperi, tonnata antica, katsuobushi,
                  sedano.
                </p>
              </div>
            </div>
            <div className="cont-title-descrizione">
              <h1 className="title-descrizione-entree">Battuta di fassona</h1>
              <p className="text-entree">sull'osso</p>
              <div className="cont-descrizione">
                <p className="text-entree">
                  Midollo caldo, olio agrumato, nocciole, pinacino e scaglie di
                  grana.
                </p>
              </div>
            </div>
            <div className="cont-title-descrizione">
              <h1 className="title-descrizione-entree">Flan di zucca</h1>
              <p className="text-entree">con fonduta di montebore</p>
              <div className="cont-descrizione">
                <p className="text-entree">
                  Flan di zucca, fonduta al montebore e chips di verdure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box-primi">
        <div className="cont-entree">
          <h1 className="title-entree">Primi</h1>
          <p className="text-entree">piatti</p>
        </div>
        <div className="primi">
          <div className="cont-title-descrizione">
            <h1 className="title-descrizione-entree">Corzetti al sugo di</h1>
            <p className="text-entree">funghi e salsiccia</p>
            <div className="cont-descrizione">
              <p className="text-entree">
                Polvere di funghi e pomodoro, carpaccio di champignon, battuta
                di salsiccia cruda.
              </p>
            </div>
          </div>
          <div className="cont-title-descrizione">
            <h1 className="title-descrizione-entree">Tajerin</h1>
            <p className="text-entree">al tartufo</p>
            <div className="cont-descrizione">
              <p className="text-entree">
                Tartufo nero, burro di cacao, ramen di fassona.
              </p>
            </div>
          </div>
          <div className="cont-title-descrizione">
            <h1 className="title-descrizione-entree">Agnolotto</h1>
            <p className="text-entree">della tradizione</p>
            <div className="cont-descrizione">
              <p className="text-entree">Al fondo bruno.</p>
            </div>
          </div>
          <div className="cont-title-descrizione">
            <h1 className="title-descrizione-entree">Risotto</h1>
            <p className="text-entree">al Gavi</p>
            <div className="cont-descrizione">
              <p className="text-entree">
                Mela verde, mandorle e *gambero rosso.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="box-secondi">
        <div className="cont-entree">
          <h1 className="title-entree">Secondi</h1>
          <p className="text-entree">piatti</p>
        </div>
        <div className="secondi">
          <div className="cont-title-descrizione">
            <h1 className="title-descrizione-entree">Filetto</h1>
            <p className="text-entree">di fassona</p>
            <div className="cont-descrizione">
              <p className="text-entree">
                Filetto di Fassona, salse di zucca e barbabietola, jus di manzo
                e chips di verdure.
              </p>
            </div>
          </div>
          <div className="cont-title-descrizione">
            <h1 className="title-descrizione-entree">Pollo</h1>
            <p className="text-entree">alla Marengo</p>
            <div className="cont-descrizione">
              <p className="text-entree">
                Rollè di pollo e gambero, bisquè di gamberi, salsa e cialda di
                pollo, zucca arrostita, spugna al prezzemolo, tuorlo d’uovo
                marinato.
              </p>
            </div>
          </div>
          <div className="cont-title-descrizione">
            <h1 className="title-descrizione-entree">Pancia di maiale</h1>
            <p className="text-entree">in agrodolce</p>
            <div className="cont-descrizione">
              <p className="text-entree">
                Pancia di maiale croccante, salsa di lapsang souchong, vaniglia,
                insalata di mela, funghi, uva e lattuga croccante.
              </p>
            </div>
          </div>
          <div className="cont-title-descrizione">
            <h1 className="title-descrizione-entree">Barbabietola</h1>
            <p className="text-entree">alla Wellington</p>
            <div className="cont-descrizione">
              <p className="text-entree">
                Barbabietola in sfoglia con spinacino, salsa di barbabietola,
                crema di patate, carote arrostite in agrodolce.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="box-dolci">
        <div className="cont-entree">
          <h1 className="title-entree">Dolci</h1>
          <p className="text-entree">chiusura in dolcezza</p>
        </div>
        <div className="dolci">
          <div className="cont-title-descrizione">
            <h1 className="title-descrizione-entree">Tiramisù</h1>
            <p className="text-entree">gurmè</p>
            <div className="cont-descrizione">
              <p className="text-entree">
                Crumble al cacao, crema mascarpone, savoiardi, caffè.
              </p>
            </div>
          </div>
          <div className="cont-title-descrizione">
            <h1 className="title-descrizione-entree">Degustazione</h1>
            <p className="text-entree">cioccolato Bodrato e rum</p>
            <div className="cont-descrizione">
              <p className="text-entree">
                Verticale di rum 8 anni, 12 anni, 15 anni.
              </p>
            </div>
          </div>
          <div className="cont-title-descrizione">
            <h1 className="title-descrizione-entree">Gianduiotti</h1>
            <p className="text-entree">al Bonet</p>
            <div className="cont-descrizione">
              <p className="text-entree">
                Bonet, mousse di nocciola, amaretti.
              </p>
            </div>
          </div>
          <div className="cont-title-descrizione">
            <h1 className="title-descrizione-entree">Panna cotta</h1>
            <p className="text-entree">al Montebore</p>
            <div className="cont-descrizione">
              <p className="text-entree">
                Panna cotta di Montebore, chips di barbabietola, coulis di
                lamponi, crumble al cacao.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="box-apericena" >
        <div className="cont-entree" ref={apericena}>
          <h1 className="title-entree">Apericena</h1>
          <p className="text-entree">per iniziare</p>
        </div>
        <div className="apericena" >
          <div className="cont-title-descrizione">
            <h1 className="title-descrizione-entree">
              - Focaccia e salame cotto
            </h1>
          </div>
          <div className="cont-title-descrizione">
            <h1 className="title-descrizione-entree">- Tagliere di formaggi</h1>
          </div>
          <div className="cont-title-descrizione">
            <h1 className="title-descrizione-entree">
              - Tagliere di salumi Barabino e toma
            </h1>
          </div>
          <div className="cont-title-descrizione">
            <h1 className="title-descrizione-entree">
              - Tagliere salumi e formaggi
            </h1>
          </div>
          <div className="cont-title-descrizione">
            <h1 className="title-descrizione-entree">- Agnolotti</h1>
            <p className="text-entree">
              Burro e salvia, fondo bruno, culo nudo, vino.
            </p>
          </div>
          <div className="cont-title-descrizione">
            <h1 className="title-descrizione-entree">
              - Focaccia al formaggio
            </h1>
            <p className="text-entree">Montebore, lardo e miele tartufato.</p>
          </div>
        </div>
      </div>
      <div className="box-cocktail" >
        <div className="cont-entree" ref={cocktail}>
          <h1 className="title-entree">Cocktail</h1>
          <p className="text-entree">per accompagnare</p>
        </div>
        <div className="cocktail">
          <div className="cont-title-descrizione">
            <h1 className="title-descrizione-entree">Manhattan</h1>
            <p className="text-entree">
              Rye whisky, vermouth rosso, angostura.
            </p>
          </div>
          <div className="cont-title-descrizione">
            <h1 className="title-descrizione-entree">Martini cocktail</h1>
            <p className="text-entree">
              Gin Borbèa, vermouth dry, oliva/limone.
            </p>
          </div>
          <div className="cont-title-descrizione">
            <h1 className="title-descrizione-entree">Apple mule</h1>
            <p className="text-entree">
              Gin Borbèa, vermouth dry, oliva/limone.
            </p>
          </div>
          <div className="cont-title-descrizione">
            <h1 className="title-descrizione-entree">Autumn smash</h1>
            <p className="text-entree">
              Vodka, succo di limone, sciroppo d’acero, succo di mela, polpa di
              fichi.
            </p>
          </div>
          <div className="cont-title-descrizione">
            <h1 className="title-descrizione-entree">Pear Sour</h1>
            <p className="text-entree">
              Brandy, succo di pera, succo di limone, albumina.
            </p>
          </div>
          <div className="cont-title-descrizione">
            <h1 className="title-descrizione-entree">
              Pumpkin spice margarita
            </h1>
            <p className="text-entree">
              Tequila, panna, succo di zucca, etratto di vaniglia.
            </p>
          </div>
          <div className="cont-title-descrizione">
            <h1 className="title-descrizione-entree">Gin-tonic nostrano</h1>
            <p className="text-entree">
              Gin Panarea / Borbèa, Acqua Brillante.
            </p>
          </div>
          <div className="cont-title-descrizione">
            <h1 className="title-descrizione-entree">Amaretto Sour</h1>
            <p className="text-entree">
              Disaronno, succo di zucca, succo limone, albumina.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Piatti;
