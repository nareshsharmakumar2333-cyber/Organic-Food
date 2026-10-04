import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import logo from "../Image/logo.png";
const Student = () => {
  return ( 
    <div className="container">
      <div className="navbar">
  <div className="logo-box">
    <img src={logo} alt="logo" />
    <h2>Organic Food</h2>
  </div>

  <div className="nav-links">
    <Link to="/">Home</Link>
    <Link to="/puri">Puri</Link>
    <Link to="/food">Food</Link>
    <Link to="/contact">Contact</Link>
  </div>
</div>
      <form className="form-card">

        <h2>Student Registration</h2>

        <input type="text" placeholder="Roll No" />

        <div className="row">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>

        <input type="text" placeholder="Father's Name" />

        <input type="text" placeholder="DD-MM-YYYY" />

        <div className="row">
          <input className="code" type="text" value="+91" readOnly />
          <input type="text" placeholder="Mobile Number" />
        </div>

        <input type="email" placeholder="Email" />

        <input type="password" placeholder="Password" />

        <div className="row">
          <label><input type="radio" name="gender" /> Male</label>
          <label><input type="radio" name="gender" /> Female</label>
        </div>

        <div className="row wrap">
          <label><input type="checkbox" /> CSE</label>
          <label><input type="checkbox" /> IT</label>
          <label><input type="checkbox" /> ECE</label>
          <label><input type="checkbox" /> Civil</label>
          <label><input type="checkbox" /> Mech</label>
        </div>

        <select>
          <option>Select Course</option>
          <option>Python</option>
          <option>Node</option>
          <option>Java</option>
          <option>React</option>
          <option>PHP</option>
        </select>

        <input type="file" />

        <input type="text" placeholder="City" />

        <textarea placeholder="Address" rows="4"></textarea>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Student;