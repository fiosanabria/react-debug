import React from "react";
import "./styles/Footer.css"

const Footer = () => {
  return <footer>
    <div className="info">
      <p>
        Todos los derechos reservados 2003-2021. República Argentina. INCAA <br />
        Lima 319; Código Postal: C1073AAG, CABA; República Argentina.</p>
    </div>
    <ul>

      <li><img alt="logo CINE.AR" src="http://cine.ar/img/logo-cinear.svg" style={{ height: '40px' }} /></li>

      <li><img alt="logo ARSAT" src="http://cine.ar/img/logo-arsat.svg" style={{ height: '40px' }} /></li>

      <li><img alt="logo INCAA" src="http://cine.ar/img/logo-incaa.svg" style={{ height: '40px' }} /></li>

    </ul>
  </footer>;

};

export default Footer;
