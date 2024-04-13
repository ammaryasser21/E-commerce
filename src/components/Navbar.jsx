import React from "react";
import {Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./css/Navbar.css";
import Main_logo from "../assets/_images_logo_logo.png";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { useProducts } from "../ProductContext.js";

 

const Navbar = () => { 
  const {products, setProducts } = useProducts();
  return (
    <nav className="navbar">
      <img src={Main_logo} alt="Company Logo" className="logo" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li className="dropdown">
          <span>Furniture Home</span>
          <ul className="dropdown-content">
          <li>
              <Link to={{ pathname: "/ProductCat", search: "?category=Bedroom" }}>Bedroom</Link>
            </li>
            <li>
              <Link to={{ pathname: "/ProductCat", search: "?category=Dining" }}>Dining</Link>
            </li>
            <li>
              <Link to={{ pathname: "/ProductCat", search: "?category=Living" }}>Living</Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <span>Furniture Office</span>
          <ul className="dropdown-content">
          <li>
              <Link to="/ProductCat">Bedroom</Link>
            </li>
            <li>
              <Link to="/ProductCat">Dining</Link>
            </li>
            <li>
              <Link to="/ProductCat">Living</Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
        <span>Furniture Hospital</span>
        <ul className="dropdown-content">
          <li>
            <Link to="/ProductCat">Bedroom</Link>
          </li>
          <li>
            <Link to="/ProductCat">Dining</Link>
          </li>
          <li>
            <Link to="/ProductCat">Living</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/Contact">Contact</Link>
      </li>
    </ul>
    <div className="icon-box">
      <div className="icon-container">
        <FaSearch className="icon" />
      </div>
      <div className="icon-container">
        <li className="dropdown one"style={{ listStyle: 'none' ,margin:0}}>
          <FaUser className="icon"  />
          <ul className="dropdown-content">
            <li>
              <Link to="/Registration">Sign in</Link>
            </li>
            <li>
              <Link to="/Cart">Cart</Link>
            </li>
            <li>
              <Link to="/WishList">WishList</Link>
            </li>
          </ul>
        </li>
      </div>
      <div className="icon-container">
      <Link to={{ pathname: "/Cart"}}><FaShoppingCart className="icon" /></Link>
        
      </div>
    </div>
  </nav>
);
};

export default Navbar;
