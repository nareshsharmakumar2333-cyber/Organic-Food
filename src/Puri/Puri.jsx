import React from 'react';
import "./Puri.css";
import logo from "../Image/logo.png"; 
import Dj from "../Image/dj.png";
import { Link } from "react-router-dom";
const Puri = () => {
  return (
    <div className="puri-container">
      
      {/* Overlay ke andar sab content hona chahiye */}
      <div className="overlay">

       <div className="navbar">
  <div className="logo-box">
    <img src={logo} alt="logo" />
    <h2>Organic Food</h2>
  </div>

  <div className="nav-links">
    <Link to="/">Home</Link>
    <Link to="/about" className="NavLinkItem">About</Link>
    <Link to="/puri">Puri</Link>
    <Link to="/food">Food</Link>
    <Link to="/contact">Contact</Link>
  </div>
</div>
     
        {/* Hero Section */}
        <div className="hero">

          {/* LEFT SIDE */}
          <div className="left-content">

            <h1><span className="highlight">🌿 Healthy</span></h1>
            <p>
              Healthy food woh hota hai jo body ko proper nutrition deta hai aur health ko improve karta hai.
            </p>

            <h1>🌱 Natural</h1>
            <p>
              Natural food bilkul prakritik tareeke se ugaya jata hai jisme chemicals ka use nahi hota.
            </p>

            <h1>🚫 Chemical Free</h1>
            <p>
              Chemical free food body ke liye safe hota hai aur long-term health ke liye best hota hai.
            </p>

            <button className="btn">Shop Now</button>

          </div>

          {/* RIGHT SIDE */}
          <div className="Dj-image">
            <img src={Dj} alt="Organic Food" />
          </div>

        </div>

      </div>
    </div>
  )
}

export default Puri;