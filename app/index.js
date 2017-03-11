import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './app';

// Creamos el estado inicial de nuestra aplicación 
const ESTADO_INICIAL = {
	loading: true,
	error: false,
	noticias: []
}
// y un reducer que será con el que cargemos el store de Redux
const reducer = (state = ESTADO_INICIAL, action) => {
	return {
		state
	}
}

const store = createStore(reducer);
// simplemente comprobamos que se está guardando el estado inicial
console.log('Estado de la aplicación: ', store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)