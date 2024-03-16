// src/components/AuthenticationPopup.js

import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import './AuthenticationPopup.css'; // Assuming your CSS file is named this

const AuthenticationPopup = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  const handleLoginSuccess = (token) => {
    // Store the token in local storage or context
    localStorage.setItem('bearerToken', token);
    // You might want to do additional things here, like closing the popup or redirecting the user
    onClose();
  };

  return (
    <div className="authentication-popup-backdrop">
      <div className="authentication-popup">
        {isLogin ? (
          <LoginForm onSwitchToRegister={() => setIsLogin(false)} onLoginSuccess={handleLoginSuccess} />
        ) : (
          <RegistrationForm onSwitchToLogin={() => setIsLogin(true)} />
        )}
        <button onClick={onClose} className="close-button">X</button>
      </div>
    </div>
  );
};

export default AuthenticationPopup;