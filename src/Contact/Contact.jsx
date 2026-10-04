import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import logo from "../Image/logo.png";

const Contact = () => {
  // Ludhiana Basti Jodhewal ka sahi Embed URL (Sample link)
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3422.043564947477!2d75.8712396!3d30.9351052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a8397a66f2717%3A0x6476e330d319e7a!2sBasti%20Jodhewal%2C%20Ludhiana%2C%20Punjab!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

  return (
    <div className="ContactContainer">
      <nav className="Navbar">
        <div className="LogoBox">
          <img src={logo} alt="Logo" className="LogoImg" />
          <h2 className="LogoText">Organic Food</h2>
        </div>
        <div className="NavLinks">
          <Link to="/" className="NavLinkItem">Home</Link>
          <Link to="/about" className="NavLinkItem">About</Link>
          <Link to="/puri" className="NavLinkItem">Puri</Link>
          <Link to="/food" className="NavLinkItem">Food</Link>
          <Link to="/contact" className="NavLinkItem ContactBtn">Contact</Link>
        </div>
      </nav>

      <div className="ContactContentWrapper">
        <h1 className="ContactHeader">Visit Our Basti Farm</h1>
        <p className="ContactSubtext">Direct from Basti Jodhewal area to your home.</p>

        <div className="ContactGrid">
          {/* 1. Form Card Fixed */}
          <div className="ContactFormCard">
            <h3>Send Message</h3>
            <form action="https://formspree.io/f/nareshsharmakumar2333@gmail.com" method="POST">
              <div className="form-group"> {/* 'className' use kiya */}
                <label>Name</label>
                <input type="text" name="Full_Name" placeholder="Full Name" required />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="email" name="Email_Address" placeholder="Email Address" required />
              </div>
              
              <div className="form-group">
                <label>Massages</label>
                <input type="massages" name="Massages_Address" placeholder="Massages Address" required />
              </div>

              <button type="submit" className="SendBtn">Send</button>
            </form>
          </div> {/* <--- Ye wala div pehle missing tha */}

          {/* 2. Map Card Fixed */}
          <div className="MapCard">
            <h3>Our Basti Location</h3>
            <div className="MapContainer">
              <iframe
                title="Ludhiana Basti Location"
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div className="ContactInfoText">
              <p>📍 Basti Jodhewal Chowk, Ludhiana, Punjab 141007</p>
              <p>📞 +91 99999-XXXXX</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;