import React from 'react'; 

export const REQUEST_TAREAS = 'REQUEST_TAREAS'
function requestTareas() {
  return {
    type: REQUEST_TAREAS,
  }
}

export const RECEIVE_TAREAS = 'RECEIVE_TAREAS'
function receiveTareas(tareas, json) {
  return {
    type: RECEIVE_TAREAS,
    tareas: json
  }
}

export function fetchTareas(tareas) {

  // Gracias al applyMiddleware podemos hacer funciones
  // creadoras de acciones que devuelvan funciones y no 
  // solo objetos planos. Esas funciones reciben como parámetro
  // la propia función dispatch para que podamos usarla dentro
  return function (dispatch) {

    // Enviamos el primer dispatch a la store con la acción de REQUEST_TAREAS
    // que básicamente pone el loading a true
    dispatch(requestTareas());

    // A continuación hacemos la llamada a la API, preparamos el josno y cuando
    // esté todo listo lanzamos el último dispatch, el de RECEIVE_TAREAS que es
    // el que inyecta realmente las tareas en el estado para que luego el componente
    // ListadoTareas las pueda mostrar.
  	return fetch('http://localhost:4200/api/tareas').then((response) => response.json()).then((json) => dispatch(receiveTareas(tareas,json)));
    
  }
}
