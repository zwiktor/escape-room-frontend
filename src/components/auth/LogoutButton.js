import React from 'react';
import { useAuth } from './AuthContext';

const LogoutButton = () => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    // Perform any additional actions after logout
  };

  return (
    <button className="login-button" onClick={handleLogout}>Logout</button>
  );
};

export default LogoutButton;