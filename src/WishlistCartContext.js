
import React, { createContext, useContext, useState,useEffect } from "react";

const WishlistCartContext = createContext();

export const useWishlistCart = () => useContext(WishlistCartContext);

export const WishlistCartProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem('wishlist')) || []
  );
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [wishlist, cart]);
  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  // eslint-disable-next-line no-unused-vars
  const setProductNumber = (product, increment) => {
    const updatedCart = cart.map(item =>
      item.id === product.id ? { ...item, number: item.number + increment } : item
    );
  
    // If the updated quantity is less than or equal to 0, remove the product from the cart
    if (updatedCart.find(item => item.id === product.id).number <= 0) {
      removeFromCart(product);
    } else {
      setCart(updatedCart);
    }
  };
  const addToWishlist = (product) => {
    setWishlist([...wishlist, product]);
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
  };

  const removeFromWishlist = (product) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== product.id);
    setWishlist(updatedWishlist);
  };

  return (
    <WishlistCartContext.Provider
      value={{
        wishlist,
        cart,
        setCart,
        addToCart,
        addToWishlist,
        removeFromCart,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistCartContext.Provider>
  );
};
