import React from "react";
import "./Food.css";
import { Link } from "react-router-dom";

// Images Import
import logo from "../Image/logo.png"; 
import veg from "../Image/veg.jpg"; 

const Food = () => {
  return (
    <div className="OrganicContainer">
      <div className="MainOverlay">
        
        {/* --- Navigation Bar --- */}
        <nav className="Navbar">
          <div className="LogoBox">
            <img src={logo} alt="Organic Logo" className="LogoImg" />
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

        {/* --- Food List Section --- */}
        <div className="FoodListWrapper">
          <h2 className="FoodListHeader">Organic Food Inventory</h2>
          
          <ul className="FoodItemList">
            {/* Item 1 */}
            <li className="FoodItemRow">
              <img src={veg} alt="Vegetables" className="FoodItemImage" />
              <div className="FoodItemDetails">
                <span className="FoodItemID">SKU: 001</span>
                <h3 className="FoodItemName">Fresh Vegetables</h3>
                <p className="FoodItemDescription">Farm-fresh organic greens delivered daily.</p>
              </div>
              <div className="FoodItemPriceTag">Rs120.00</div>
            </li>

            {/* Item 2 */}
            <li className="FoodItemRow">
              <img src={veg} alt="Fruits" className="FoodItemImage" />
              <div className="FoodItemDetails">
                <span className="FoodItemID">SKU: 002</span>
                <h3 className="FoodItemName">Organic Fruits</h3>
                <p className="FoodItemDescription">100% natural, pesticide-free sweet fruits.</p>
              </div>
              <div className="FoodItemPriceTag">Rs180.00</div>
            </li>

            {/* Item 3 */}
            <li className="FoodItemRow">
              <img src={veg} alt="Grains" className="FoodItemImage" />
              <div className="FoodItemDetails">
                <span className="FoodItemID">SKU: 003</span>
                <h3 className="FoodItemName">Healthy Grains</h3>
                <p className="FoodItemDescription">Unprocessed whole grains for a healthy life.</p>
              </div>
              <div className="FoodItemPriceTag">Rs170.00</div>
            </li>
          </ul>
        </div>

      </div> 
    </div>
  );
};

export default Food;