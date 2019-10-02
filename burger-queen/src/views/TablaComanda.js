import React from 'react';

class TablaComanda extends React.Component {
    state = JSON.parse(localStorage.getItem('clientes'));

    render() {
        //console.log(this.state);
        
        //this.props.agregarClientes(this.state.name);
        return(
            <h1>{this.state.name}</h1>
        )
    }
}
export default TablaComanda;