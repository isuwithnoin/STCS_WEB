import React from 'react';
import './header.css'
function Header() {
  return (
    <header className="header">
      <div className="logo">
        <a href="/">Deep Flow</a>
      </div>
      <nav className="header-nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
