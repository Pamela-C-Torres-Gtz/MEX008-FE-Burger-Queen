import React from 'react';
import Notificacion from '../components/Notificacion';
import Buttons from '../components/Buttons';

class EnvioOrden extends React.Component {
    render() {
        return <div>
            <Notificacion content = "Tu pedido se ha enviado a cocina exitosamente" />
            <Buttons text = "Continuar con orden" />
            <Buttons text = "Menu principal" />
        </div>
    }
}

export default EnvioOrden;