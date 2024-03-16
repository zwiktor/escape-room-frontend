// src/context/AuthContext.js

import React, { createContext, useState, useContext } from 'react';
import axios from "axios";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: localStorage.getItem('authToken'),
    email: localStorage.getItem('authEmail'),
  });

  const login = (newAuth) => {
    localStorage.setItem('authToken', newAuth.token);
    localStorage.setItem('authEmail', newAuth.email);
    setAuth(newAuth);
  };

  const logout = async () => {
    const token = localStorage.getItem('authToken')

    if (token) {
      try {
        await axios.post('http://localhost:8000/auth/redis/logout', {}, {
          headers: {
            'accept': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });
        console.log("Logged out successfully");
      } catch (error) {
        console.error("Logout failed", error);
      }
    }

    localStorage.removeItem('authToken');
    localStorage.removeItem('authEmail');
    setAuth({ token: null, email: null });
  }

  return (
    <AuthContext.Provider value={{ ...auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);