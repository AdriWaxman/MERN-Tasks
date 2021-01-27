import React, { useContext, useEffect } from 'react';
import Project from './Project';
import projectContext from '../../components/context/projects/projectContext';

const ListProjects = () => {
    
    //Extraer proyectos de stateInitial
    const projectsContext = useContext(projectContext);
    const { projects, setProjects } = projectsContext;

    //Obtener proyectos cuando carga
    useEffect(() =>{
        setProjects()
    }, [])


    //Comprobar si tienes contenido
    if(projects.length === 0) return null;

 
    return (  
        <ul className="listado-proyectos">
            {projects.map(project =>(
            <Project
                key={project.id}
                project={project}
            />
            ))}
        </ul>
    );
}
 
export default ListProjects;