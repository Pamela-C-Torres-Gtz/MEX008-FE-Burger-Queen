import React from 'react';
import Form from '../components/Form';
import "../styles/Registro.css";


class Registro extends React.Component {
    //state = {
    //     clients : [],
    // }
    // handleSubmit = client => {
    //     this.setState({ characters: [...this.state.clients, client]})
    // }
    
    render() {
        return <div className="Registro">
            <div className="Registro_header">
              <h3 className="text-center">Esta orden estará a nombre de: </h3>
            </div>
            <div className="Container">
            <Form  agregarClientes={this.agregarClientes}/>
            </div>
        </div>
    }
}

export default Registro;