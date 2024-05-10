import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';
import { useProducts } from "../ProductContext.js";
import { useWishlistCart } from "../WishlistCartContext.js";

const RelPro = ({ type }) => {
    const { products } = useProducts();
    const { addToCart, addToWishlist, removeFromCart, removeFromWishlist } = useWishlistCart();
    const [filteredProducts, setFilteredProducts] = useState([]);  

    useEffect(() => {
        if (type) {
            const filtered = products.filter(product => product.category === type);
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts(products);
        }
    }, [type, products]);

    const headingStyle = {
        fontSize: '36px',
        marginBottom: '15px',
        fontWeight: '700',
        marginLeft: '70px',
        '@media only screen and (max-width: 1200px)': {
          fontSize: '24px',
          fontWeight: '200',
          marginLeft: '20px',
        },
      };

    return (
        <>
            <h1 style={headingStyle}>Related Products</h1>
            <ProductList 
                products={filteredProducts} 
                addToCart={addToCart}
                addToWishlist={addToWishlist}
                removeFromCart={removeFromCart}
                removeFromWishlist={removeFromWishlist} 
            />
        </>
    );
};

export default RelPro;
