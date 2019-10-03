import React from 'react';
import { withRouter } from 'react-router-dom';

import { InputGroup, Input, Label, Button } from 'reactstrap';
import '../styles/Form.css';

class Form extends React.Component {
    state = {
        name: '',
    }
    onSubmit = e => {
        console.log('Holi');
        e.preventDefault();
        localStorage.setItem('clientes', JSON.stringify(this.state));
        this.props.history.push('/Sidebar');
        //console.log(JSON.parse(localStorage.getItem('clientes')));
        //this.props.agregarClientes(this.state.name);
    }
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value})
    }
    render(){
        //console.log(this.props);
        
        return(
            <form onSubmit={this.onSubmit}>
                <Label className="text-center">
                <h4>
                <span className="font-weight-blod"></span>
                </h4></Label>
                <br />
               
                <InputGroup className="InputGroup" size="lg"
                name="name"
                type="text" 
                placeholder="Nombre"
                value={this.state.name} 
                onChange={this.onChange}><Input/></InputGroup>
                <br />
                <br />
                    <Button className="button"
                         size="lg"
                        color="warning" 
                        type="submit"
                        onSubmit={this.onSubmit} block>
                          Registrar
                    </Button>
             
            </form>
        )
    }
}

export default withRouter(Form);