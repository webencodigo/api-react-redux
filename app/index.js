import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux';

import App from './app';

// Creamos el estado inicial de nuestra aplicación 
const ESTADO_INICIAL = {
	loading: true,
	error: false,
	tareas: []
}

// y un reducer que será con el que cargemos el store de Redux
const reducer = (state= ESTADO_INICIAL, action) => {
	switch( action.type ){
		case 'REQUEST_TAREAS':
		return {
			...state,	
			loading: true,
		}
		case 'RECEIVE_TAREAS':
		return {
			...state,
			loading: false,
			tareas: action.tareas
		}
		default:
		return state
	}
	
}

// Usando thunkMiddleware para poder pasarle funciones a dispatch()
const store = createStore(reducer,applyMiddleware(thunkMiddleware)); 

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
