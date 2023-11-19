// src/Login.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css';
import Group from '../../img/Group.png'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async () => {
    try {
      const response = await fetch('https://aggressive-boa-buckle.cyclic.app/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        console.log('Login successful');
        // Redirect to the home screen upon successful login
        history.push('/homescreen');
      } else {
        const data = await response.json();
        console.error('Login failed:', data.error);
        // Handle login failure, show an alert, etc.
        window.alert('Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Handle network error or other issues
      window.alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="login-container">
      <div className="Layout-img">
        <img src={Group} alt="Logo" className="logo" />
      </div>
      <div className="layout-text">
        #We are Electric
      </div>
      <div>
        <form>

          <input
            type="email"
            id="email"
            value={email}
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
          /><br />

          <input
            type="password"
            id="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          /><br />

          <button type="button" className="login-button" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
      <div className="layout-text">
        Forget password ?
      </div>
    </div>
  );
};

export default Login;
