import React from "react";
import "./Header.css"; // Ensure file name matches
import { Link } from "react-router-dom";
import logo from "../Image/logo.png";

const Header = () => {
  return (
    <header className="header-container">
      <nav className="navbar">
        <div className="logo-box">
          <img src={logo} alt="Organic Food Logo" className="logo-img" />
          <h2 className="logo-text">Organic Food</h2>
        </div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">About</Link></li>
          <li><Link to="/puri">Puri</Link></li>
          <li><Link to="/food">Food</Link></li>
          <li><Link to="/Arithmetic">Arithmetic</Link></li>
          <li><Link to="/contact" className="contact-btn">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;