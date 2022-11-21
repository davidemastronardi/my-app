import React, { useEffect, useState } from "react";
import { useRef } from "react";
import "./CardPrenota.css";
import pippo from "../../img/whatsapp.png";
import x from "../../img/x.svg";

const CardPrenota = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [persone, setPersone] = useState(0);

  const closeMessaggio = () => {
    setIsOpen(false);
  };

  const form = useRef(null);

    useEffect(() => {
      if (persone) {
      if (parseInt(persone)>=5) {
      setIsOpen(true)
    }
    }
  }, [persone]);

  const InvioDati = (e) => {
    e.preventDefault();

    const data = new FormData(form.current);
    let formObject = Object.fromEntries(data.entries());

    formObject.messaggio = formObject.messaggio.replace(/(?:\r|\n|\r\n)/g, " ");
    formObject.giorno = formObject.giorno.split("-").reverse().join("-");

    let text = `ciao sono ${formObject.nome} %0asiamo in: ${formObject.numerocommensali} %0avorremmo venire il giorno: ${formObject.giorno} %0aMessaggio: ${formObject.messaggio}`;

   window.open(`https://api.whatsapp.com/send?phone=3482957498&text=${text}`,"_blank")
    formObject.numerocommensali = formObject.numerocommensali
      ? parseInt(formObject.numerocommensali)
      : 0;
    formObject.numerobambini = formObject.numerobambini
      ? parseInt(formObject.numerobambini)
      : 0;
    console.log(formObject);
    if (formObject.numerocommensali + formObject.numerobambini >= 5) {
      setIsOpen(true);
    }
  };

  return (
    <div className="cardprenota">
      <div className="box-card-prenota">
        <div className="box-title-card-prenota">
          <h1 className="title-prenota">Prenota ora</h1>
        </div>
        <form className="form" ref={form} onSubmit={InvioDati}>
          {isOpen && (
            <div className="box-messaggio">
              <img
                className="x-messaggio"
                src={x}
                onClick={closeMessaggio}
                alt="x"
              />
              <div className="text-messaggio">
                <h1>Attenzione!</h1>
                <p>
                  Lo staff di <strong>ENIGMA</strong> consiglia di concordare un
                  menu fisso per prenotazioni di tavoli composti da 5 o più
                  persone, cosi da evitare lunghi tempi di attesa.
                </p>
                <p>Contattaci via whatsapp o telefonicamente. </p>
                <div className="box-button-messaggio">
                  <a href="https://wa.me/3899999788" target="_blank">
                    <img className="button-whatsapp" src={pippo} alt="phone" />
                  </a>
                </div>
                <p>
                  <strong>+39 389 9999788</strong>
                </p>
              </div>
            </div>
          )}
          <div className="box-input">
            <label>Nome</label>
            <input className="input" name="nome" type="text" />
          </div>
          <div className="box-input ">
            <label>Telefono</label>
            <input className="input" name="telefono" type="number" />
          </div>
          <div className="box-input ">
            <label>Giorno</label>
            <input className="input" name="giorno" type="date" />
          </div>
          <div className="box-input">
            <label>Orario</label>
            <select className=" select input" name="orario">
              <option value="18:00">18:00</option>
              <option value="18:30">18:30</option>
              <option value="19:00">19:00</option>
              <option value="19:30">19:30</option>
              <option value="20:00">20:00</option>
              <option value="20:30">20:30</option>
              <option value="21:00">21:00</option>
              <option value="21:30">21:30</option>
              <option value="22:00">22:00</option>
              <option value="22:30">22:30</option>
              <option value="23:00">23:00</option>
            </select>
          </div>
          <div className="box-input">
            <label>Aperitivo/Cena</label>
            <select className="box-input100" name="modalita">
              <option value="apericena">Apericena</option>
              <option value="cena">Cena</option>
            </select>
          </div>
          <div className="box-input">
            <label>Num. commensali</label>
            <input className="input" name="numerocommensali" onChange={(e)=>{setPersone(e.target.value)}}type="number" />
          </div>
          <div className="box-input ">
            <label>Num. bambini</label>
            <input className="input" name="numerobambini" type="number" />
          </div>
          <div className="box-input-messaggi">
            <label>Messaggi</label>
            <textarea
              className="messaggi"
              cols="1"
              rows="5"
              name="messaggio"
            ></textarea>
          </div>
          <div className="box-invia">
            <input disabled={persone>5} className="invia input" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CardPrenota;
