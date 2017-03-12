import React from 'react';

import { fetchTareas } from './action-creators';

class ListadoTareas extends React.Component{

	componentWillMount(){
		this.props.dispatch(fetchTareas());
	}
	
	render(){
		const { loading, tareas } = this.props;
		if( loading == true ){
			return  (
				<div>Cargando...</div>
			)
		} else {
			return (
				<div>
					<h1>En este componente vamos a mostrar las tareas</h1>
					<ul>
					    {tareas.map(tarea =>
					      <li key={tarea._id}>{tarea.name}</li>
					    )}
				  	</ul>
				</div>
			)
		}
	}
}

export default ListadoTareas