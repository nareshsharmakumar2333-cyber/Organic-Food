import React from "react";
import "./Food.css";
import studentImg from "../Image/a1.jpg";
import studentImg2 from "../Image/b2.jpg";
import studentImg3 from "../Image/c3.jpg";
import { Link } from "react-router-dom";
import logo from "../Image/logo.png";
const List = () => {
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

      <div className="title">
        <h1>Student List</h1>
      </div>

      <table border="1">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Photo</th>
            <th>Name</th>
            <th>Father Name</th>
            <th>Mobile No</th>
            <th>Address</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td><img src={studentImg} alt="student" width="50" /></td>
            <td>Rahul Sharma</td>
            <td>Ramesh Sharma</td>
            <td>9876543210</td>
            <td>Delhi</td>
          </tr>

          
            <tr>
  <td>2</td>
  <td><img src={studentImg2} alt="student" width="50" /></td>
  <td>Amit Kumar</td>
  <td>Suresh Kumar</td>
  <td>9876543211</td>
  <td>Punjab</td>
</tr>

          <tr>
            <td>3</td>
            <td><img src={studentImg3} alt="student" width="50" /></td>
            <td>Rohit Singh</td>
            <td>Mahesh Singh</td>
            <td>9876543212</td>
            <td>Haryana</td>
          </tr>

          <tr>
            <td>4</td>
            <td><img src={studentImg} alt="student" width="50" /></td>
            <td>Vikas Yadav</td>
            <td>Naresh Yadav</td>
            <td>9876543213</td>
            <td>UP</td>
          </tr>

          <tr>
            <td>5</td>
            <td><img src={studentImg} alt="student" width="50" /></td>
            <td>Sachin Verma</td>
            <td>Rajesh Verma</td>
            <td>9876543214</td>
            <td>Jaipur</td>
          </tr>

          <tr>
            <td>6</td>
            <td><img src={studentImg} alt="student" width="50" /></td>
            <td>Deepak Gupta</td>
            <td>Anil Gupta</td>
            <td>9876543215</td>
            <td>Mumbai</td>
          </tr>

          <tr>
            <td>7</td>
            <td><img src={studentImg} alt="student" width="50" /></td>
            <td>Arjun Mehta</td>
            <td>Sunil Mehta</td>
            <td>9876543216</td>
            <td>Chandigarh</td>
          </tr>

          <tr>
            <td>8</td>
            <td><img src={studentImg} alt="student" width="50" /></td>
            <td>Karan Patel</td>
            <td>Ravi Patel</td>
            <td>9876543217</td>
            <td>Gujarat</td>
          </tr>

          <tr>
            <td>9</td>
            <td><img src={studentImg} alt="student" width="50" /></td>
            <td>Manish Jain</td>
            <td>Ajay Jain</td>
            <td>9876543218</td>
            <td>Bhopal</td>
          </tr>

          <tr>
            <td>10</td>
            <td><img src={studentImg} alt="student" width="50" /></td>
            <td>Nitin Aggarwal</td>
            <td>Vijay Aggarwal</td>
            <td>9876543219</td>
            <td>Lucknow</td>
          </tr>
        </tbody>

      </table>
    </div>
  );
};

export default List;