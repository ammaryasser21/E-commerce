import React from 'react';
import './css/Wishlist.css';
import Title from './Title';  
import Empty from './Empty';
import { useWishlistCart } from "../WishlistCartContext";

const Wishlist = () => {
  const { wishlist, addToCart, removeFromWishlist } = useWishlistCart();
  
  return (
    <div>
      <Title title="WISHLIST"/>
      {wishlist.length === 0 ? (
        <Empty name="Wishlist is empty!"/>
      ) : (
      <div className="wishlist-container">
        {wishlist.map((product) => (
          <div className="wishlist-item" key={product.id}>
            <div className="item-info">
              <img src={product.photo} alt={product.name} />
              <div className="item-details">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
              </div>
            </div>
            <div className="item-actions">
              <button onClick={() => addToCart(product)}>Add to Cart</button>
              <button onClick={() => removeFromWishlist(product)}>Remove from Wishlist</button>
            </div>
          </div>
        ))}
      </div>
      )}
    </div>
  );
};

export default Wishlist;
