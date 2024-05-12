// import React, { createContext, useContext, useState, useEffect } from 'react';

// const ProductContext = createContext();

// export const useProducts = () => {
//   return useContext(ProductContext);
// };

// export const ProductProvider = ({ children }) => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/products/',{
//           method:'GET'
//         });
//         if (!response.ok) {
//           throw new Error('Failed to fetch products');
//         }
//         const responseData = await response.json();
//         const productsData = responseData.data.Products;
//         setProducts(productsData);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
      
//     };
    
//   fetchProducts();
    
//   }, []);

//   const onAddReview = (productId, newReview) => {
//     const updatedProducts = products.map(product => {
//       if (product._id === productId) {
//         return { ...product, reviews: [...product.reviews, newReview] };
//       }
//       return product;
//     });
//     setProducts(updatedProducts);
//   };

//   return (
//     <ProductContext.Provider value={{ products, setProducts, onAddReview }}>
//       {children}
//     </ProductContext.Provider>
//   );
// };

import React, { createContext, useContext, useState } from 'react';
import product1 from './assets/product1.jfif';
import Product2 from './assets/Product2.jfif';
import Product3 from './assets/Product3.jfif';

const ProductContext = createContext();

export const useProducts = () => {
  return useContext(ProductContext);
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { 
      id: 1, 
      name: "Product 1", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      isNew: true, 
      isFeatured: false, 
      isTrending: false,
      isOneSale:false,
      price:1000,
      discount:999,
      number:0,
      capacity: 10,
      photo: product1,
      category:"Chair",
      reviews: [
        {id:0, userName: "User3", rating: 3, message: "Good quality." },
        {id:1, userName: "User4", rating: 4, message: "Nice design." }
      ]
    },
    { 
      id: 2, 
      name: "Product 2", 
      description: "Sed ullamcorper elit vel erat congue.",
      isNew: false, 
      isFeatured: true, 
      isTrending: false,
      isOneSale:false,
      price:1000,
      discount:50,
      number:0,
      capacity: 15,
      photo: Product2,
      category:"Bedroom",
      reviews: [
        {id:0, userName: "User3", rating: 3, message: "Good quality." },
        {id:1, userName: "User4", rating: 4, message: "Nice design." }
      ]
    },
    { 
      id: 3, 
      name: "Product 3", 
      description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      isNew: true, 
      isFeatured: true, 
      isTrending: false,
      isOneSale:false,
      price:1000,
      discount:500,
      number:0,
      capacity: 20,
      photo: Product3,
      category:"Dining",
      reviews: [
        {id:0, userName: "User3", rating: 3, message: "Good quality." },
        {id:1, userName: "User4", rating: 4, message: "Nice design." }
      ]
    },
    { 
      id: 4, 
      name: "bed", 
      description: "Fusce vel arcu elementum, dictum lorem nec.",
      isNew: false, 
      isFeatured: false, 
      isTrending: true,
      isOneSale:false,
      price:1000,
      discount:400,
      number:0,
      capacity: 25,
      photo: Product3,
      category:"Lounge",
      reviews: [
        {id:0, userName: "User3", rating: 3, message: "Good quality." },
        {id:1, userName: "User4", rating: 4, message: "Nice design." }
      ]
    },
  ]);

  const onAddReview = (productId, newReview) => {
    const updatedProducts = products.map(product => {
      if (product.id === productId) {
        return { ...product, reviews: [...product.reviews, newReview] };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  return (
    <ProductContext.Provider value={{ products,setProducts,onAddReview }}>
      {children}
    </ProductContext.Provider>
  );
};
