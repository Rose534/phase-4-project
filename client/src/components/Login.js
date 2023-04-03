import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function LoginForm() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
    .then((r) => r.json())
    .then((data) => {
      console.log(data);
      navigate('/homepage'); 
    })
    .catch((error) => {
      console.error(error);
    });
  
   
  };
  return (
    <div className="login-form">
  
  <form className="login-form__form">
    <h2 className="login-form__title">Login Form</h2>
    <label htmlFor="username" className="login-form__label">Username:</label>
    <input type="text" id="username" className="login-form__input" value={username} onChange={(e) => setUsername(e.target.value)} required/>
    <label htmlFor="password" className="login-form__label">Password:</label>
    <input type="password" id="password" className="login-form__input" value={password} onChange={(e) => setPassword(e.target.value)} required/>
    <button type="submit" className="login-form__button" onClick={handleLogin}>
      Login
    </button>
    <p className="login-form__forgot-password">forgot password? click <Link to="/reset" className="login-form__link">here</Link></p>
  </form>
</div>

  );
}
export default LoginForm;