import React from 'react';
import Buttons from '../components/Buttons';

class TablaComanda extends React.Component {
    state = JSON.parse(localStorage.getItem('clientes'));

    render() {
        //console.log(this.state);
        //this.props.agregarClientes(this.state.name);
        return(
            <div>
                <h1>{this.state.name}</h1>
                <Buttons text="Enviar a Cocina" />
            </div>
        );
    }
}
export default TablaComanda;