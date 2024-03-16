// src/components/Navbar.js

import React, { useState } from 'react';
import './Navbar.css';
import { useAuth } from "../auth/AuthContext";
import LogoutButton from "../auth/LogoutButton";
import AuthenticationPopup from '../auth/AuthenticationPopup';


const Navbar = ({ onLoginClick }) => {
  const [showAuthPopup, setShowAuthPopup] = useState(false);
  const { token, email} = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-logo">Podaj hasło</div>

      {token ? (
        <div>
          Logged in as {email}
          <LogoutButton ></LogoutButton>
        </div>
      ) : (
        <button className="login-button" onClick={() => setShowAuthPopup(true)}>Login</button>
      )}
      {showAuthPopup && (
        <AuthenticationPopup
            onClose={() => setShowAuthPopup(false)}
            onLoginSuccess={() => setShowAuthPopup(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;

