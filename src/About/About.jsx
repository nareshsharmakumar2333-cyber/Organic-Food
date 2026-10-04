import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import logo from "../Image/logo.png";
import vegImg from "../Image/veg.jpg"; // Aap koi bhi farm ki image use kar sakte hain

const About = () => {
  return (
    <div className="AboutContainer">
      {/* --- Navbar --- */}
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

      {/* --- Hero Section --- */}
      <div className="AboutHero">
        <h1>Pure. Organic. Local.</h1>
        <p>Basti Jodhewal se seedha aapki thali tak.</p>
      </div>

      {/* --- Main Content --- */}
      <div className="AboutContentWrapper">
        <div className="AboutStoryGrid">
          <div className="StoryImage">
            <img src={vegImg} alt="Our Farm" />
          </div>
          <div className="StoryText">
            <h2 className="SectionTitle">Our Story</h2>
            <p>
              Humne apna safar Ludhiana ke chote se farm se shuru kiya tha. 
              Hamara maqsad hamesha se hi logon ko chemical-free aur asli 
              poushtik khana pahunchana raha hai. 
            </p>
            <p>
              Aaj hum Ludhiana ke kai parivaron ko rozana taza aur organic 
              sabziyan aur phal deliver kar rahe hain.
            </p>
          </div>
        </div>

        {/* --- Stats/Values Section --- */}
        <div className="ValuesGrid">
          <div className="ValueCard">
            <h3>100% Organic</h3>
            <p>No pesticides, no chemicals. Sirf qudrati tareeke se ugaaya hua.</p>
          </div>
          <div className="ValueCard">
            <h3>Farm Fresh</h3>
            <p>Subah khet se toda gaya, shaam tak aapke ghar.</p>
          </div>
          <div className="ValueCard">
            <h3>Local Love</h3>
            <p>Ludhiana ke local kisanon ko support karte hain.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;