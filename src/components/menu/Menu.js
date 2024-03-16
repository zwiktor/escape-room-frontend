// src/components/Menu.js
import React from 'react';
import { Link } from 'react-router-dom';
// import './Menu.css'; // Assume you've created CSS for styling

function Menu() {
  return (
    <div className="menu">
      {/* Example menu item */}
      <Link to="/" className="menu-item">Home</Link>
      {/* Add more menu items here */}
    </div>
  );
}

export default Menu;