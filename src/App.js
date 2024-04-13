import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from  './components/Home.jsx';
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
import NotFound from './components/NotFound.jsx';

import { ProductProvider } from './ProductContext';

const App = () => {
  // Define state for products
  
return (
  <div>
      <ProductProvider>
        <BrowserRouter>
          <Navbar />
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
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ProductProvider>
    </div>
)
}

export default App;
