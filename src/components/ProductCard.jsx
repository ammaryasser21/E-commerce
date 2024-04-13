import React from 'react'
import './css/ProductCard.css';

const ProductCard = ({ product, addToCart }) => {

  const handleAddToCart = () => {
    addToCart(product);
  };
  return (
    <div className="product-card">
      <img src={product.photo} alt={product.name} className="product-image" />
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        {product.isNew && <span className="new-badge">New</span>}
        <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductCard