import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./css/Navbar.css";
import Main_logo from "../assets/_images_logo_logo.png";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { useWishlistCart } from "../WishlistCartContext.js";

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <form className="search-form">
      <input
        name="search"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Enter your search keyword..."
        type="search"
        className="search-input"
      />
      <Link
        to={`/ProductSearch?search=${searchQuery}`}
        className="search-button"
      >
        <FaSearch className="icon" />
      </Link>
    </form>
  );
};

const Navbar = () => {
  const { cart } = useWishlistCart();
  const [showSearch, setShowSearch] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUsername = localStorage.getItem('username');
    if (storedToken) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    const currentScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;
    setShowNavbar(currentScrollTop <= 0 || currentScrollTop < lastScrollTop);
    setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
  };


  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const toggleBurgerMenu = () => {
    setShowBurgerMenu(!showBurgerMenu);
  };

  return (
    <>
      <nav className={`navbar ${showNavbar ? "show" : "hide"}`}>
        <img src={Main_logo} alt="Company Logo" className="logo" />
        <button className="burger-menu" onClick={toggleBurgerMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={showBurgerMenu ? "show" : "hide"}>
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
                <Link
                  to={{ pathname: "/ProductCat", search: "?category=Bedroom" }}
                >
                  Bedroom
                </Link>
              </li>
              <li>
                <Link
                  to={{ pathname: "/ProductCat", search: "?category=Dining" }}
                >
                  Dining
                </Link>
              </li>
              <li>
                <Link
                  to={{ pathname: "/ProductCat", search: "?category=Living" }}
                >
                  Living
                </Link>
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
          </li><div className="icon-box">
          <div className="icon-container">
            <FaSearch className="icon" onClick={toggleSearch} />
          </div>
          <div className="icon-container">
            <li
              className="dropdown one"
              style={{ listStyle: "none", margin: 0 }}
            >
              <FaUser className="icon" />
              <ul className="dropdown-content">
              {isLoggedIn && (
                  
                    <li>
                      <Link to="/">{username}</Link>
                    </li>
                    
                )}
                <li>
                  <Link to="/Cart">Cart</Link>
                </li>
                <li>
                  <Link to="/WishList">WishList</Link>
                </li>
                {isLoggedIn ? (
                    <li>
                      <Link to="/" onClick={handleLogout}>
                        Logout
                      </Link>
                    </li>
                ) : (
                  <li>
                    <Link to="/Registration">Sign in</Link>
                  </li>
                )}
              </ul>
            </li>
          </div>
          <div className="icon-container">
            <Link to={{ pathname: "/Cart" }}>
              <FaShoppingCart className="icon shoppingcart" />
              {cart.length!==0 && <p className="len">{cart.length}</p>}
              
            </Link>
          </div>
        </div>
        </ul>
        
      </nav>

      <div className={`search-bar ${showSearch ? "show" : "hide"}`}>
        <div className="search-content">
          <div className="form-wrap">
            <SearchForm />
          </div>
          <button className="clear-button"  onClick={toggleSearch}>
          
          </button>
        </div>
        <div
          className={`overlay ${showSearch ? "show" : "hide"}`}
          onClick={toggleSearch}
        ></div>
      </div>
    </>
  );
};

export default Navbar;