import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Login from './login';//para logearse con firebase
import Layout from '../views/Layout'; // para el siseño de nuestra pagina
import Areas from '../views/Areas';
import Tips from '../views/Tips';
import Home from '../views/Home';
import Menu from '../views/Menu';
import Registro from '../views/Registro';
import EnvioOrden from '../views/EnvioOrden';

import Promo from '../views/Promo';




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

          <Route path="/Registro" component={Registro} />
          <Route path="/EnvioOrden" component={EnvioOrden} />

          <Route path="/Promo" component={Promo} />

        </Layout>
      </Switch>
    </BrowserRouter>
  );
}
export default App;


