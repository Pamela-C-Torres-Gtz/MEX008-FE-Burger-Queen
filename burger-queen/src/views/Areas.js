import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Buttons from '../components/Buttons';
import { Link } from 'react-router-dom';


//import '../components/styles/Areas.css';

class Areas extends React.Component {
    render() {

        return <div className="areas-container">
          
            <div className = "btn-areas">
                <Link to="/Tips" >
                    <Buttons  className="btn btn-outline-secondary" text = "Servicio" />
                </Link>
            </div>
      
            <div className = "btn-areas">
                <Buttons text = "Cocina" />
            </div>

        </div>
    }
}

export default Areas