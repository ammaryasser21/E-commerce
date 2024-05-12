import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home.jsx';
import Registration from './components/Registration.jsx';
import Cart from './components/Cart.jsx';
import Wishlist from './components/Wishlist.jsx';
import Checkout from './components/Checkout.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import ProductList from './components/ProductList.jsx';
import ProductCat from './components/ProductCat.jsx';
import ProductSearch from './components/ProductSearch.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Products from './components/Products.jsx';
import ProductDetails from './components/ProductDetails.jsx';
import NotFound from './components/NotFound.jsx';

import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Ourteam from "./components/Ourteam.jsx";
import Orders from "./components/Orders.jsx";
import Dashproduct from "./components/Dashproduct.jsx";
import Dashcategory from "./components/Dashcategory.jsx";

import { ProductProvider } from './ProductContext';
import { WishlistCartProvider } from "./WishlistCartContext";


const App = () => {
  return (
    <div>
      <ProductProvider>
        <WishlistCartProvider>
          <BrowserRouter>
            <AppInner />
          </BrowserRouter>
        </WishlistCartProvider>
      </ProductProvider>
    </div>
  );
};

const AppInner = () => {
  const location = useLocation();

  const showNavbarAndFooter = () => {
    const dashboardRoutes = ['/Dashboard', '/Ourteam', '/Orders', '/Dashproduct', '/Dashcategory'];
    return !dashboardRoutes.includes(location.pathname);
  };

  return (
    <div>
      {showNavbarAndFooter() && <Navbar />}
      <Routes>
      <Route path="/" index element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Registration" element={<Registration />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/Wishlist" element={<Wishlist />} />
              <Route path="/Checkout" element={<Checkout />} />
              <Route path="/ProductList" element={<ProductList />} />
              <Route path="/ProductCat" element={<ProductCat />} />
              <Route path="/ProductSearch" element={<ProductSearch />} />
              <Route path="/ProductDetails" element={<ProductDetails />} />
              <Route path="/Products" element={<Products />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/SignUp" element={<SignUp />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/OurTeam" element={<Ourteam />} />
              <Route path="/Orders" element={<Orders />} />
              <Route path="/Dashproduct" element={<Dashproduct />} />
              <Route path="/Dashcategory" element={<Dashcategory />} />
      </Routes>
      {showNavbarAndFooter() && <Footer />}
    </div>
  );
};



 export default App;