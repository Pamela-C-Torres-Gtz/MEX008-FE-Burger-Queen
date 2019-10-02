import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

import './styles/index.css';//importamos bootstrap
import 'bootstrap/dist/css/bootstrap.css';

import App from './components/App';
import Firebase, { FirebaseContext } from './components/Firebase';

//const container = document.getElementById('app');
//ReactDOM.render(<App />, container);
ReactDOM.render (
  <FirebaseContext.Provider value={new Firebase()}>
      <App />,
  </FirebaseContext.Provider>,
  document.getElementById('app'),
);

serviceWorker.unregister();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


