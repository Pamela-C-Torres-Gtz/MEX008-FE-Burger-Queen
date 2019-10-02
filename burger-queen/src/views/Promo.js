import React from "react";
import Footer from "../components/Footer";

import "../styles/Promo.css";
import pizza from "../img/pizza.png";
import Sidebar from "../components/Sidebar";

class Promo extends React.Component {
  render() {
    return (
      <div>
        
        <div className="Promo">
          <div className="Promo_header">
            <h1>Promo del día</h1>
          </div>
          <div className="Container">
            <div className="row">
              <div className="Promo_col col-6 col-md-6">
                <div className="menuPromo">
                  <h3 className="text-center">
                    Pizzas <br /> 2 x 1
                  </h3>
                  <img className="Promo_logo-piza"  src={pizza} alt="Logo del menu"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Promo;
