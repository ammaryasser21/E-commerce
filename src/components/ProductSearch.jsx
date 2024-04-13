import React from 'react'
import "./css/ProductSearch.css"
import Title from './Title'
import ProductList from './ProductList'
import { useProducts } from "../ProductContext.js";


const ProductSearch = () => {  
  const {products, setProducts } = useProducts();
  return (
    <>
    <Title title="PRODUCT SEARCH"/>
    <ProductList/>
    </>
    
  )
}

export default ProductSearch