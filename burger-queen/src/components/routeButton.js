import React from "react";
import next from '../img/next.png';
import './styles/routeButton.css';

class RouteButton extends React.Component {
    render() {
        return (
            <div>
                <figure>
                   <img className="nextButton" src={next} alt="Siguiente"></img>
                </figure>
            </div>
        );
    }
}

export default RouteButton;