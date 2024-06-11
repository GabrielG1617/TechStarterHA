import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="nav-bar">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">A lua legătura</a></li>
        <li><a href="#">Programare</a></li>
        <li><a href="#">Despre noi</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
