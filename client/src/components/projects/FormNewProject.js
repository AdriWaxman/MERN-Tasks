import React, { Fragment, useState} from 'react';

const FormNewProject = () => {

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
    </Fragment>
   );
}
  
export default FormNewProject;