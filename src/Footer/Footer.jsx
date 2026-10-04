import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="FooterMain">
      <div className="FooterContainer">
        
        {/* Section 1: About */}
        <div className="FooterSection">
          <h3 className="FooterTitle">Organic Food</h3>
          <p className="FooterAboutText">
            Basti Jodhewal, Ludhiana se seedha aapke ghar tak taza aur 
            chemical-free sabziyan pahunchana hamara mission hai.
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div className="FooterSection">
          <h4 className="FooterSubTitle">Quick Links</h4>
          <ul className="FooterLinksList">
            <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
                <li><Link to="/puri">Puri</Link></li>
            <li><Link to="/food">Food Inventory</Link></li>
          
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Section 3: Contact Info */}
        <div className="FooterSection">
          <h4 className="FooterSubTitle">Contact Info</h4>
          <p className="FooterContactItem">📍 Basti Jodhewal, Ludhiana, Punjab</p>
          <p className="FooterContactItem">📞 +91 98765-XXXXX</p>
          <p className="FooterContactItem">📧 info@organicfood.com</p>
        </div>

      </div>

      <div className="FooterBottom">
        <p>&copy; 2026 Organic Food Store. Naresh sharma.</p>
      </div>
    </footer>
  );
};

export default Footer;