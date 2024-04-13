import React, { createContext, useContext, useState } from 'react';

const ProductContext = createContext();
export const useProducts = () => {
  return useContext(ProductContext);
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { 
      id: 1, 
      name: "Product 1", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum nisi in odio finibus, eu fermentum neque fringilla.",
      isNew: true, 
      isFeatured: false, 
      isTrending: false,
      photo: "https://example.com/product1.jpg"
    },
    { 
      id: 2, 
      name: "Product 2", 
      description: "Sed ullamcorper elit vel erat congue, nec luctus purus consequat. Aliquam bibendum lorem nec leo scelerisque, eu mollis nisl laoreet.",
      isNew: false, 
      isFeatured: true, 
      isTrending: false,
      photo: "https://example.com/product2.jpg"
    },
    { 
      id: 3, 
      name: "Product 3", 
      description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      isNew: true, 
      isFeatured: true, 
      isTrending: false,
      photo: "https://example.com/product3.jpg"
    },
    { 
      id: 4, 
      name: "Product 4", 
      description: "Fusce vel arcu elementum, dictum lorem nec, pellentesque sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
      isNew: false, 
      isFeatured: false, 
      isTrending: true,
      photo: "https://example.com/product4.jpg"
    },
  
]);

  return (
    <ProductContext.Provider value={{ products,setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
