
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
    // Check if the product already exists in the cart
    const existingProduct = cart.find((item) => item.id === product.id);
  
    if (existingProduct) {

      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, number: item.number + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, number: 1 }]);
    }
  };
  
  // eslint-disable-next-line no-unused-vars
  const setProductNumber = (product, increment) => {
    const updatedCart = cart.map(item =>
      item.id === product.id ? { ...item, number: item.number + increment } : item
    );
  
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
