import React from "react";
import "./css/Footer.css";
import "@fortawesome/fontawesome-free/css/all.css";

const Footer = () => {
  return (
    <div>
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
                <a href=" ">About Us</a>
              </li>
              <li>
                <a href=" ">Privacy & Policy</a>
              </li>
              <li>
                <a href=" ">Terms</a>
              </li>
            </ul>
          </div>
          <div className="footer-section account">
            <h4>Account</h4>
            <ul>
              <li>
                <a href=" ">Login</a>
              </li>
              <li>
                <a href=" ">My Cart</a>
              </li>
              <li>
                <a href=" ">Wishlist</a>
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
