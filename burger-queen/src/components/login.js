import React from 'react';
import '../styles/login.css';
import logodemonium from '../img/logodemonium.png';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'; // componente de botones de red social
import {  Link  } from "react-router-dom";

import * as ROUTES from '../../constants/routes';

class Login extends React.Component {
//comienzo con la conexion con firebase
handChange= e =>{
  console.log({
    no_empleado:e.target.no_empleado,
  });
};

handleClick = e => {
  console.log('Button was clicked');
};
handleSubmit = e => {
  e.preventDefault ();
  console.log('Form was submitted');
};

  render() {
  return ( 
      <Form onSubmit={this.handleSubmit} className="App">
        <div><img className="login_header" src={logodemonium} alt="Logo de la compañia"/></div>
        <h1 className="text-center">Inicia sesión</h1>
        <h2>
          <span className="font-weight-blod">Ingresa tu No. D'Monium</span>
        </h2>

        <FormGroup className="form">
          <Label className="text-center"></Label>
          <Input className="input" type="number" placeholder="Ingresa tu número de empleado"></Input>
        </FormGroup>
        <Button className="btn" color="warning" block>
          <Link to="/Areas">Iniciar</Link>
        </Button>
      </Form>
   );
 }
}
export default Login;

