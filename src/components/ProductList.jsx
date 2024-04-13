import React from 'react'
import './css/ProductList.css';
import ProductCard from './ProductCard';
const ProductList = ({ products, addToCart }) => {
  return (
    
    <div className='product-list'>
      {products.length > 0 ? (
        products.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart}/>
        ))
      ) : (

        <div className="empty-icon">
          <span>Empty</span>
        </div>
      )}
    </div>
    
  )
}

export default ProductList