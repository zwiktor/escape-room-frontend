import React, { useState } from 'react';
import axios from 'axios';
import qs from 'qs';
import {useAuth} from "./AuthContext";


const LoginForm = ({ onSwitchToRegister, onLoginSuccess }) => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = qs.stringify({
      grant_type: '',
      username: email,
      password: password,
      scope: '',
      client_id: '',
      client_secret: '',
    });

    const config = {
      method: 'post',
      url: 'http://localhost:8000/auth/redis/login',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data : data
    };

    try {
      const response = await axios(config);
      const { access_token } = response.data;
      login({ token: access_token, email });
      onLoginSuccess();

    } catch (err) {
      setError('Login failed. Please check your credentials.');
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="login-email">Email</label>
        <input
          type="email"
          id="login-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="login-password">Hasło</label>
        <input
          type="password"
          id="login-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {error && <div className="error-message">{error}</div>}
      <div className="form-action">
        <button type="submit">Zaloguj</button>
      </div>
      <div className="switch-form">
        Nie masz konta? <span onClick={onSwitchToRegister}>Rejestracja</span>
      </div>
    </form>
  );
};

export default LoginForm;