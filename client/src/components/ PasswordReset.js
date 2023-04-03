import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PasswordReset() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleResetPassword = (e) => {
    e.preventDefault();
    fetch(`https://clicky-h5gz.onrender.com/password/reset`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
      .then((response) => {
        if (response.ok) {
          setMessage('Password reset successful!');
          navigate('/login'); 
        } else if (response.status === 404) {
          setMessage('User not found');
        } else {
          setMessage('Something went wrong. Please try again later.');
        }
      })
      .catch((error) => {
        setMessage('Something went wrong. Please try again later.');
        console.error(error);
      });
  };

  return (
    <div id="reset">
      <div className="reset-password-form">
        <h1 className="reset-password-form__title">Password Reset</h1>
        <form className="reset-password-form__form" onSubmit={handleResetPassword}>
          <div className="reset-password-form__form-group">
            <label className="reset-password-form__label" htmlFor="username">Username:</label>
            <input className="reset-password-form__input" type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div className="reset-password-form__form-group">
            <label className="reset-password-form__label" htmlFor="password">New Password:</label>
            <input className="reset-password-form__input" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button className="reset-password-form__button" type="submit">Reset Password</button>
        </form>
        {message && <p className="reset-password-form__message">{message}</p>}
      </div>
    </div>
  );
}

export default PasswordReset;
