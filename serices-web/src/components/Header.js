import React, { useState, useEffect, useRef } from 'react';
import '../styles/Header.css';
import logo from '../assets/logo2.png';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isContactVisible, setContactVisible] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  // Usar useRef para rastrear el nodo del menú desplegable
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    const handleScroll = () => {
      setContactVisible(window.scrollY <= 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Cerrar el menú desplegable si se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    // Agregar el evento de clic al documento
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Limpiar el evento al desmontar
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Barra superior de contacto */}
      <div className={`contact-bar ${isContactVisible ? 'visible' : 'hidden'}`}>
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <strong>(786) 762-4165</strong> <br />Call Today For A Free Claim Evaluation
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
          <strong>Florida</strong> <br />8333 NW 53rd Street, Suite 450
        </div>
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <strong>elevateclaimadjusters@gmail.com</strong>
        </div>
      </div>

      {/* Header principal */}
      <header
        className={`header ${isContactVisible ? '' : 'header-scrolled'} ${isSmallScreen ? 'always-visible' : ''}`}
      >
        <img src={logo} alt="Logo" className="logo" />

        {/* Menú de navegación */}
        <nav className={`navigation ${isMenuOpen ? 'open' : ''}`}>
          <a href="/">Home</a>
          <a href="/services">Services</a>
          {/* Menú desplegable para "Claim Specialties" */}
          <div className="dropdown" ref={dropdownRef}>
            <div className="dropdown-toggle" onClick={toggleDropdown}>
              Claim Specialties <span className="arrow">▼</span>
            </div>
            <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
              <a href="/specialty1">Fire Damage</a>
              <a href="/specialty2">Hurricane Damage</a>
              <a href="/specialty3">Mold Damage</a>
              <a href="/specialty4">Theft</a>
              <a href="/specialty5">Vandalism</a>
              <a href="/specialty6">Water Damage</a>
            </div>
          </div>
          <a href="/team">About Us</a>
          <a href="/faq">Testimonials</a>
          <a href="/contact">Contact Us</a>
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
    </>
  );
}

export default Header;
