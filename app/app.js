import React from 'react';
import { connect } from 'react-redux';

import ListadoTareas from './listadoTareas';

const mapStateToProps = (state) => {
	return{
		loading: state.loading,
		tareas: state.tareas
	}
}

export default connect(mapStateToProps)(ListadoTareas);

