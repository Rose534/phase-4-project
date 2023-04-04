import React, { useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSignup = (e) => {
    e.preventDefault();
    fetch(`https://clicky-h5gz.onrender.com/users`, {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body:JSON.stringify({username, email, password}),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        
        localStorage.setItem("token", data.token); 
        navigate("/login", { replace: true }); 
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div id="sign">
      <div className="signup-form">
        <form className="signup-form-container" onSubmit={handleSignup}>
          <h1 className="signup-heading">Signup</h1>
          <div className="signup-input-container">
            <label className="signup-label" htmlFor="username">Username:</label>
            <input className="signup-input" type="text" id="firstName" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div className="signup-input-container">
            <label className="signup-label" htmlFor="email">Email:</label>
            <input className="signup-input" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="signup-input-container">
            <label className="signup-label" htmlFor="password">Password:</label>
            <input className="signup-input" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button className="signup-button" type="submit">Signup</button>
          <p>Already have an account? <Link to="/login">Login here</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
