import React from 'react';
import FormNewProject from '../projects/FormNewProject';
import ListProjects from '../projects/ListProjects';
 
const Sidebar = () => {
  return (  
    <aside>
      <h1>MERN<span>Tasks</span></h1>
        <FormNewProject />
      <div className="proyectos">
        <h2>Your projects</h2>
        <ListProjects/>
      </div>
    </aside>
  );
} 
 
export default Sidebar;