import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PasswordReset from './ PasswordReset';

function LoginForm() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = (e) => {
    e.preventDefault();
    fetch("/login", {
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
    <div>
      <h2>Login Form</h2>
      <form >
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        <button type="submit" onClick={handleLogin}>
          Login
        </button>
        <p>forgot password? click <Link to="/reset">here</Link></p>
      </form>
    </div>
  );
}
export default LoginForm;