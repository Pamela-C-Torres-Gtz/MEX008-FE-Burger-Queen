import React from 'react';
import '../styles/login.css';
import logodemonium from '../img/logodemonium.png';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'; // componente de botones de red social
import {  Link  } from "react-router-dom";

/*import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebase';*/

//comienza diseño con bootstrap


class Login extends React.Component {
  render() {
  return ( 
      <Form className="App">
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

//comienza los componentes para el logeo con firebase
/*const firebaseApp = firebase.initializaApp(firebaseConfig);
class Login extends Component {
    render () {
        const { user, singOut, signInWithGoogle } = this.props;
        return ( 
            <div>
                {
                    user ?
                    <p>Bienvenido, {user.displayName}</p>
                    : <p>Por favor ingresa</p>  
                }
                {
                    user 
                    ? <button onClick={singOut}>Sign out</button>
                    : <button onClick={signInWithGoogle}>Sing in with Google</button>
                }
            </div>
        );
    }
}
const firebaseAppAuth = firebaseApp.auth();
const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Login);*/