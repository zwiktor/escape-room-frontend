// src/components/RegistrationForm.js

import React from 'react';

const RegistrationForm = ({ onSwitchToLogin }) => {
  // Function to handle registration form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you'd handle the registration logic
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="register-email">Email</label>
        <input type="email" id="register-email" required />
      </div>
      <div className="form-group">
        <label htmlFor="register-password">Hasło</label>
        <input type="password" id="register-password" required />
      </div>
      <div className="form-action">
        <button type="submit">Zarejestruj</button>
      </div>
      <div className="switch-form">
        Masz już konto? <span onClick={onSwitchToLogin}>Zaloguj się</span>
      </div>
    </form>
  );
};

export default RegistrationForm;