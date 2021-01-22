import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

  //State Log-in
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  //Extraer
  const {email, password} = user;


  const handleDataLogin = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  };

  const handleLogin = e => {
    e.preventDefault();

    //Validacion

    //Pasar al action
  }

  return ( 
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Log In</h1>

        <form
          onSubmit={handleLogin}
        >
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              placeholder="youraccount@example.com"
              value={email}
              onChange={handleDataLogin}
            />  
          </div>

          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password"
              placeholder="Your password" 
              value={password}
              onChange={handleDataLogin}
            />  
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Log In"
            />
          </div>
        </form>
        {/* <a className="forgotten-pass" href="!#">Forgot your password?</a>
        <hr /> */}
        <Link to={'/sign-up'} className="enlace-cuenta">
        Are you not registered yet? <b>Sign Up</b>.
        </Link>
      </div>
    </div>
   );
}
 
export default Login;