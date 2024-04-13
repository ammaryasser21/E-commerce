import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Title from './Title';
import ProductList from './ProductList';
import { useProducts } from "../ProductContext.js";


const ProductCat = () => { 
  const {products} = useProducts();
  const location = useLocation();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get('category');
    
    if (category) {
      const filtered = products.filter(product => product.category === category);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [location, products]);

  return (
    <>
      <Title title="PRODUCT CATEGORY"/>
      <ProductList products={filteredProducts} />
    </>
  );
};

export default ProductCat;
