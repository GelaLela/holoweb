import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Hololive_logo.png"; 
import fnaf from "../assets/fnf.gif";  
import jumpscare from "../assets/jumpscare.mp3"; 

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLogoClick = () => {
    const audio = new Audio(jumpscare);
    audio.play();

    setShowSplash(true);

    setTimeout(() => {
      setShowSplash(false);
    }, 3000);
  };

  return (
    <>
      <nav className="navbar">
        <img
          className="logo"
          src={logo}
          alt="Logo"
          onClick={handleLogoClick}
          style={{ cursor: 'pointer', maxHeight: '40px' }}
        />

        <button className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>
            HOME
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>
            ABOUT ME
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>
            PROJECTS
          </NavLink>
          <NavLink to="/gallery" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>
            GALLERY
          </NavLink>
          <NavLink to="/contacts" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>
            CONTACT
          </NavLink>
        </div>
      </nav>

      {showSplash && (
        <div className="splash-overlay">
          <img src={fnaf} alt="Splash" className="splash-gif" />
        </div>
      )}
    </>
  );
}
