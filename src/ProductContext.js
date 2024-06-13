import React, { createContext, useContext, useState, useEffect } from 'react';

const ProductContext = createContext();

export const useProducts = () => {
  return useContext(ProductContext);
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://backend-ecommerce-0qim.onrender.com/api/products/',{
          method:'GET'
        }); 
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const responseData = await response.json();
        const productsData = responseData.data.Products;
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
      
    };
    
  fetchProducts();
    
  }, []);

  const onAddReview = (productId, newReview) => {
    const updatedProducts = products.map(product => {
      if (product._id === productId) {
        return { ...product, reviews: [...product.reviews, newReview] };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  return (
    <ProductContext.Provider value={{ products, setProducts, onAddReview }}>
      {children}
    </ProductContext.Provider>
  );
};


