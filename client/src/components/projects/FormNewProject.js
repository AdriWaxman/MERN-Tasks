import React, { Fragment, useState, useContext } from 'react';
import projectContext from '../../components/context/projects/projectContext';

const FormNewProject = () => {

  //State de formulario
  const projectsContext = useContext(projectContext);
  const { newFormProject } = projectsContext;

  //State project
  const [project, setProject] = useState({
    name:''
  });

  //destructuring
  const { name } = project;

  const handleDataProject = e => {
    setProject({
      ...project,
      [e.target.name]: e.target.value
    })
  };

  //Submit project
  const handleProject = e =>{
    e.preventDefault();

    //validation errors 

    //Add state 

    //reset input  

  };

  return ( 
    <Fragment>
      <button
      type="button"
      className="btn btn-block btn-primario"
    >
      
        New project
      </button>
      {
        newFormProject 
          ? (
            <form
            className="formulario-nuevo-proyecto"
            onSubmit={handleProject}
          >
              <input 
                type="text"
                className="input-text"
                placeHolder="Project name"
                name="name"
                value={name}
                onChange={handleDataProject}
              />
      
              <input 
                type="submit"
                className="btn btn-block btn-primario"
                value="Add project"
              />
           </form>
          ) : null
      }
    </Fragment>
   );
}
  
export default FormNewProject;