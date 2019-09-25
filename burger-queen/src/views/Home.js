import React from "react";
import { Link } from "react-router-dom";
import menuLogo from "../img/menu.png";
import menuClock from "../img/clock.png";
import menuBill from '../img/bill.png'
import menuSurvey from "../img/survey.png";

import "../styles/Home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
          <div className="Home_header">
          <h1>Menú Principal</h1>
          </div>
        <div className="Container">
          <div className="row">
            <div className="Home_col1 col-6 col-md-6">
              <div className="menuLogo">
                <Link className="text" to="/Menu">
                  <img className="Home_logo-Menu" src={menuLogo} alt="Logo del menu"/>
               </Link>
              </div>
                <h3 className="text-center">Tomar una Orden</h3>
            </div>
            <div className="Home_col col-6 col-md-6">
            <div className="ordenLogo">
              <Link className="text" to="/Stepper">
                <img className="Home_logo-Pendientes" src={menuClock} alt="Logo de Ordenes Pendientes"/>
              </Link>
            </div>
              <h3 className="text-center">Ordenes pendientes</h3>
            </div>
            </div>

            <div className="row">
            <div className="Home_col col-6 col-md-6">
            <div className="cuentasLogo">
              <Link className="text" to="/Stepper">
                <img className="Home_logo-Cuentas" src={menuBill} alt="Logo de Cuentas"/>
              </Link>
              </div>
              <h3 className="text-center">Cuentas</h3>
            </div>
            <div className="Home_col col-6 col-md-6">
            <div className="encuestaLogo">
              <Link className="text" to="/Stepper">
                <img className="Home_logo-Encuesta" src={menuSurvey} alt="Logo de Encuesta"/>
              </Link>
              </div>
              <h3 className="text-center">Encuesta</h3>
            </div>
            </div>
        </div>
      </div>
    );
  }
}
export default Home;
