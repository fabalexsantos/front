import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <img src={logo} alt="book db logo" className="logo" />
        <ul className="nav-links">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
