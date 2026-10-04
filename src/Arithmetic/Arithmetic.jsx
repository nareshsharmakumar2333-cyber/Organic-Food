import React from "react";
import "./Arithmetic.css"; 

function Arithmetic() { 
  let a = 50;
  let b = 40;
  let add = a + b;
  let Subtraction = a-b;
  let	Multiplication=a*b;
  let 	Division =a/b;

  return (
    <div style= {{textAlign:"center", marginTop:"50px",color:"blue"}}>
      <h1>Arithmetic</h1>
      <h2>Value of a = {a}</h2>
      <h2>Value of b = {b}</h2>
      <p>Addition (a + b) = {add}</p> 
     <p>Subtraction (a - b) = {Subtraction}</p> 
     <p>	Multiplication(a*b)={	Multiplication}</p>
     <p>	Division (a/b)={	Division}</p>
    </div>


  );
}


export default Arithmetic;