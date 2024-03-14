import React from 'react';
import '../../App.css';
import CartWidget from '../CartWidget/cartwidget';

const Navbar = () => {
  return (
      <header>
    <nav className="navbar">
      <div className="container">
        <a href="/" className="navbar-brand">
          General Store
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
  <CartWidget />
      </header>
  );
};

export default Navbar;