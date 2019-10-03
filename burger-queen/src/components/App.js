import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Layout from '../views/Layout'; // para el siseño de nuestra pagina
import Login from './login';//para logearse con firebase
import Tips from '../views/Tips';
import Areas from '../views/Areas';
import Home from '../views/Home';
import Registro from '../views/Registro';
//import Sidebar from './Sidebar';
import Menu from '../views/Menu';
import TablaComanda from '../views/TablaComanda';
import EnvioOrden from '../views/EnvioOrden';

import Promo from '../views/Promo';

import Sidebar from './Sidebar';

import Footer from './Footer';





function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Layout>
          <Route path="/Areas" component={Areas} />
          <Route path="/Tips" component={Tips} />
          <Route path="/Home" component={Home} />
          <Route path="/Menu" component={Menu} />
          <Route path="/Sidebar" component={Sidebar} />


          <Route path="/Registro" component={Registro} />
          <Route path="/EnvioOrden" component={EnvioOrden} />
          <Route path="/TablaComanda" component={TablaComanda} />

          <Route path="/Promo" component={Promo} />


        </Layout>
      </Switch>
    </BrowserRouter>
  );
}
export default App;


