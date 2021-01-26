import React from 'react';

const FormTask = () => {
  return ( 
    <div className="formulario">
      <form
        onSubmit={e => {e.preventDefault(); console.log("Tarea añadida")}}
      >
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Task name..."
            name="name"
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-coral btn-submit btn-block"
            value="Add Task"
          />
        </div>
      </form>
    </div>
   );
}
 
export default FormTask;