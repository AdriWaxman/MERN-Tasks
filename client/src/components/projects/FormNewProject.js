import React, { Fragment} from 'react';

const FormNewProject = () => {
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
      >
        <input 
          type="text"
          className="input-text"
          placeHolder="Project name"
          name="name"
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