import React from 'react';
import Notificacion from '../components/Notificacion';
import Buttons from '../components/Buttons';
import "../styles/EnvioOrden.css";
import { Link } from 'react-router-dom';

class EnvioOrden extends React.Component {
    render() {
        return <div className="App">
            <div className="Envio_header">
            <Notificacion className="text-center" content = "Tu pedido se ha enviado a cocina exitosamente" />
            </div>
            <div>
            <Link to="/TablaComanda">
            <Buttons text = "Continuar con orden" />
            </Link>
            <Link to="/Menu">
            <Buttons text = "Menu principal" />
            </Link>
            </div>
        </div>
    }
}

export default EnvioOrden;