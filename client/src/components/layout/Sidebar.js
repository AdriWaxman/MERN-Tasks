import React from 'react';
import FormNewProject from '../projects/FormNewProject';
 
const Sidebar = () => {
  return (  
    <aside>
      <h1>MERN<span>Tasks</span></h1>
        <FormNewProject />
      <div className="proyectos">
        <h2>Your projects</h2>
      </div>
    </aside>
  );
}
 
export default Sidebar;