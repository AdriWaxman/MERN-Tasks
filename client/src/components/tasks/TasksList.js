import React, { Fragment } from 'react';
import Task from './Task';

const TasksList = () => {

  const projectTasks = [
    {name: 'Elegir plataforma', stateTask: true},
    {name: 'Ver listado de productos', stateTask: false},
    {name: 'Elegir plataforma de pago', stateTask: false},
    {name: 'importar imagenes', stateTask: true}
  ];

  return ( 
    <Fragment>
      <h2>Project: Tienda Virtual</h2>
      <ul className="listado-tareas">
        {projectTasks.length === 0
          ? (<li className="tarea"><p>No tasks availables</p></li>)
          : (projectTasks.map(task => (
            <Task
              task={task}
            />
          )))
        }
      </ul>
      <button type="button" className="btn btn-eliminar">Delete Project &times;</button>
    </Fragment>
   );
}
 
export default TasksList;