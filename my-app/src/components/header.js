import React from 'react';
import './header.css'
// import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <a href="/">Deep Flow</a>
      </div>
      <nav className="header-nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Service</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
