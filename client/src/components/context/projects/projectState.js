import React, { useReducer } from 'react';

import projectContext from './projectContext';
import projectReducer from './projectReducer';
import { FORM_PROJECT, SET_PROJECT } from '../../types';



//Logica de states en un solo archivo
const ProjectState = props => {

  const  projects = [
    {id: 1, name: 'Tienda'},
    {id:2, name: 'Diseño virtual'},
    {id:3, name: 'Aprender React'}
  ];

  const initalState = {
    projects : [],
    newformproject: false
  }

  //Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(projectReducer, initalState); 

  //CRUD de funciones
  const handleToggleForm = () => {
    dispatch({
      type: FORM_PROJECT
    })
  };

  //Obtener los proyectos
  const setProjects = () =>{
    dispatch({
      type: SET_PROJECT,
      payload: projects
    })
  }

  return (
    <projectContext.Provider
      value={{
        projects: state.projects,
        newformproject: state.newformproject,
        handleToggleForm,
        setProjects
        
      }}
    >
      {props.children}
    </projectContext.Provider>
  )
}

export default ProjectState;