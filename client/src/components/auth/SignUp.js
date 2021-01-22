import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {

  //State Log-in
  const [newuser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
    confirm: ''
  });

  //Extraer
  const {name, email, password, confirm} = newuser;


  const handleDataNewUser = e => {
    setNewUser({
      ...newuser,
      [e.target.name]: e.target.value
    })
  };

  const handleNewUser = e => {
    e.preventDefault();

    //Validacion
    

    //Password min 6 char

    //Confirm Password
    
    //Pasar al action
  }

  return ( 
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Sign Up</h1>

        <form
          onSubmit={handleNewUser}
        >
          <div className="campo-form">
            <label htmlFor="name">User name</label>
            <input 
              type="text" 
              id="name" 
              name="name"
              placeholder="Your name"
              value={name}
              onChange={handleDataNewUser}
            />  
          </div>

          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              placeholder="youraccount@example.com"
              value={email}
              onChange={handleDataNewUser}
            />  
          </div>

          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password"
              placeholder="6 characters minimum" 
              value={password}
              onChange={handleDataNewUser}
            />  
          </div>

          <div className="campo-form">
            <label htmlFor="confirm">Confirm Password</label>
            <input 
              type="password" 
              id="confirm" 
              name="confirm"
              placeholder="6 characters minimum"   
              value={confirm}
              onChange={handleDataNewUser}
            />  
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Register"
            />
          </div>
        </form>
        
        <Link to={'/'} className="enlace-cuenta">
        Are you alredy registered? <b>Log In</b>.
        </Link>
      </div>
    </div>
   );
}
 
export default SignUp;