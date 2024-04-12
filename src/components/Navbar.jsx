import React from "react";
import {Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./css/Navbar.css";
import Main_logo from "../assets/_images_logo_logo.png";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={Main_logo} alt="Company Logo" className="logo" />
      <ul>
        <li>
          <Link To="/Home">Home</Link>
        </li>
        <li>
          <Link To="">About</Link>
        </li>
        <li className="dropdown">
          <span>Furniture Home</span>
          <ul className="dropdown-content">
            <li>
              <Link To="">Bedroom</Link>
            </li>
            <li>
              <Link To="">Dining</Link>
            </li>
            <li>
              <Link To="">Living</Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <span>Furniture Office</span>
          <ul className="dropdown-content">
          <li>
              <Link To="">Bedroom</Link>
            </li>
            <li>
              <Link To="">Dining</Link>
            </li>
            <li>
              <Link To="">Living</Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
        <span>Furniture Hospital</span>
        <ul className="dropdown-content">
          <li>
            <Link To="">Bedroom</Link>
          </li>
          <li>
            <Link To="">Dining</Link>
          </li>
          <li>
            <Link To="">Living</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link To="">Contact</Link>
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
              <Link To="">Bedroom</Link>
            </li>
            <li>
              <Link To="">Dining</Link>
            </li>
            <li>
              <Link To="">Living</Link>
            </li>
          </ul>
        </li>
      </div>
      <div className="icon-container">
        <FaShoppingCart className="icon" />
      </div>
    </div>
  </nav>
);
};

export default Navbar;
