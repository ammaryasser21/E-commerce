import React from 'react';
import Title from './Title';
import ProductList from './ProductList';
import { useProducts } from "../ProductContext.js";
import { useWishlistCart } from "../WishlistCartContext.js";
const Products = () => {
    const {products} = useProducts();
    const { addToCart, addToWishlist, removeFromCart, removeFromWishlist } = useWishlistCart();

  return (
    <>
    <Title title="PRODUCTS"/>
    <ProductList products={products} addToCart={addToCart}
            addToWishlist={addToWishlist}
            removeFromCart={removeFromCart}
            removeFromWishlist={removeFromWishlist} />
  </>
  )
}

export default Products