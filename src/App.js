import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

// Sabhi Pages ko Import karein
import Home from "./Home/Home";
import Food from "./Food/Food";
import About from "./About/About";
import Puri from "./Puri/Puri";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer"; 
import Arithmetic from "./Arithmetic/Arithmetic"; 

// Layout Component: Yeh Footer ko har page par chipka kar rakhega
const MainLayout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div style={{ flex: 1 }}>
        {/* Is Outlet ki jagah saare niche waale components load honge */}
        <Outlet /> 
      </div>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/arithmetic" element={<Arithmetic />} />
          <Route path="/food" element={<Food />} />
          <Route path="/about" element={<About />} />
          <Route path="/puri" element={<Puri />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* 404 Page Not Found Route */}
          <Route path="*" element={<h1 style={{textAlign: 'center'}}>404 - Page Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;