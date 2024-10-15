import React, { useState } from 'react';
import '../styles/Header.css';
import logo from '../assets/logo.png';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Función para alternar la visibilidad del menú
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      
      {/* Menú de navegación */}
      <nav className={`navigation ${isMenuOpen ? 'open' : ''}`}>
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/about">About</a>
        <a href="/team">Team</a>
        <a href="/faq">FAQs</a>
        <a href="/contact">Contact</a>
        <a href="/claims-wizard">Claims Wizard</a>
      </nav>

      {/* Botón "Start Now" */}
      <button className="start-now">Start Now</button>

      {/* Ícono de hamburguesa */}
      <div className="hamburger-icon" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </header>
  );
}

export default Header;
