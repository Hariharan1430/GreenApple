import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../Contactus-elements/logo 1.png"; 

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Close the mobile menu when a link is clicked
  const handleLinkClick = () => {
    if (isMenuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo-link">
        <img src={logo} alt="Green Apple Logo" className="greenapple-logo" />
      </Link>

      <div className="desktop-menu">
        <Link to="/about" className="nav-links">
          About GAK
        </Link>
        <Link to="/why-us" className="nav-links">
          Why Us
        </Link>
        <Link to="/gallery" className="nav-links">
          Gallery
        </Link>
        <Link to="/contact" className="nav-links">
          Contact Us
        </Link>
        <Link to="/admissions" className="nav-links">
          Admissions
        </Link>
        <Link to="/enquire" className="enquire-button">
          Enquire Now
        </Link>
      </div>
      

      <div className="mobile-menu-wrapper">
        <button
          className="mobile-menu-icon"
          onClick={handleMenuToggle}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span>{isMenuOpen ? "▲" : "▼"}</span>
        </button>

        <Link to="/enquire" className="enquire-button-mobile">
          Enquire Now
        </Link>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? "show" : ""}`}>
        <Link to="/" className="mobile-nav-links" onClick={handleLinkClick}>
          Home
        </Link>
        <Link to="/about" className="mobile-nav-links" onClick={handleLinkClick}>
          About GAK
        </Link>
        <Link to="/why-us" className="mobile-nav-links" onClick={handleLinkClick}>
          Why Us?
        </Link>
        <Link to="/gallery" className="mobile-nav-links" onClick={handleLinkClick}>
          Gallery
        </Link>
        <Link to="/contact" className="mobile-nav-links" onClick={handleLinkClick}>
          Contact Us
        </Link>
        <Link to="/admissions" className="mobile-nav-links" onClick={handleLinkClick}>
           Admissions
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
