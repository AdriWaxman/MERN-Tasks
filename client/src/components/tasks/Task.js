import React from 'react';

const Task = ({task}) => {
  return ( 
    <li className="tarea sombra">
      <p>{task.name}</p>

        <div className="estado">
          {task.stateTask
            ?
              (<button type="button" className="completo">Completed</button>)
            :
            (<button type="button" className="incompleto">Unfinished</button>)
          }
        </div>

        <div className="acciones">
          <button type="button" className="btn btn-primario">Edit</button>
          <button type="button" className="btn btn-secundario">Remove</button>
        </div>
    </li>

    
   );
}
 
export default Task;