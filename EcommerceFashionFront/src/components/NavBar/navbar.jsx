import React from 'react';
import '../../App.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="/" className="navbar-brand">
          Fashion Front
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/men" className="nav-link">
              Men
            </a>
          </li>
          <li className="nav-item">
            <a href="/women" className="nav-link">
              Women
            </a>
          </li>
          <li className="nav-item">
            <a href="/kids" className="nav-link">
              Kids
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;