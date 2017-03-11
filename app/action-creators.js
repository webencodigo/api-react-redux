import React from 'react'; 

export const REQUEST_POSTS = 'REQUEST_POSTS'
function requestTareas(tareas) {
  return {
    type: REQUEST_POSTS,
    tareas
  }
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
function receiveTareas(tareas, json) {
  return {
    type: RECEIVE_POSTS,
    tareas: json.map(tareas => noticia.name),
  }
}


export function fetchTareas(tareas) {

  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return function (dispatch) {

    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(requestTareas(tareas))

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.


 	return fetch('http://localhost:4200/api/tareas').then((response) => response.json()).then((json) => dispatch(receiveTareas(tareas,json)));
    
  }
}
