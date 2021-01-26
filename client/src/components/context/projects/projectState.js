import React, { useReducer } from 'react';

import projectContext from './projectContext';
import projectReducer from './projectReducer';

//Logica de states en un solo archivo
const ProjectState = props => {
  const initalState = {
    newFormProject: false
  }

  //Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(projectReducer, initalState); //si no funciona poner UseReducer = useReducer;

  //CRUD de funciones

  return (
    <projectContext.Provider
      value={{newFormProject: state.newFormProject}}
    >
      {props.children}
    </projectContext.Provider>
  )
}

export default ProjectState;