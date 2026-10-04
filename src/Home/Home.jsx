import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import foodImg from "../Image/furit.jpg"; 
import logo from "../Image/logo.png"; 

const Home = () => {
  return (
    <div className="organic-container">
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
          <div className="hero-text">
            <h1>
              <span className="organic">Organic</span> Food Delivered to Your Doorsteps
            </h1>
            <p>Healthy • Natural • Chemical Free</p>
            <button>Shop Now</button>
          </div>

          {/* RIGHT SIDE */}
          <div className="hero-image">
            <img src={foodImg} alt="Organic Food" />
          </div>

        </div>

      </div>
    </div>
  );
};

export default Home;