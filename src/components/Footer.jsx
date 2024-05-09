import React from "react";
import "./css/Footer.css";
import {Link} from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.css";

const Footer = () => {
  return (
    <div className="M-footer">
      <footer className="footer">
        <div className="contain">
          <div className="footer-section about-us">
            <h4>About Us</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed do
              eiusmod tempor incididunt.
            </p>
            <div className="social-icons">
              <a href=" ">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href=" ">
                <i className="fab fa-twitter"></i>
              </a>
              <a href=" ">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href=" ">
                <i className="fab fa-youtube"></i>
              </a>
              <a href=" ">
                <i className="fab fa-pinterest-p"></i>
              </a>
            </div>
          </div>
          <div className="footer-section information">
            <h4>Information</h4>
            <ul>
              <li>
              <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="*">Privacy & Policy</Link>
              </li>
              <li>
                <Link to="*">Terms</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section account">
            <h4>Account</h4>
            <ul>
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
          </div>
          <div className="footer-section newsletter">
            <h4>NewsLetter</h4>
            <input type="email" placeholder="Enter E-Mail Address" />
            <button className="subscribe-btn">
              <i className="fas fa-paper-plane"></i>Subscribe
            </button>
          </div>
        </div>
      </footer>
      <div className="copyright">
        <p>
          © 2024 Furns. Made With <span className="heart">❤</span> by Ammar.
        </p>
      </div>
    </div>
  );
};

export default Footer;
