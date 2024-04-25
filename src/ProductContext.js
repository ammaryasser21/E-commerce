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
      photo: product1,
      category:"Chair"
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
      photo: Product2,
      category:"Bedroom"
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
      photo: Product3,
      category:"Dining"
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
      photo: Product3,
      category:"Lounge"
    },
  
]);

  return (
    <ProductContext.Provider value={{ products,setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
