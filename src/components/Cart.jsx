import React, { useState } from 'react';
import styles from './css/Cart.module.css'; // Adjust the path if needed

import Title from './Title';  
import Empty from './Empty';
import { useWishlistCart } from "../WishlistCartContext.js";
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart } = useWishlistCart();
  
  const [productQuantities, setProductQuantities] = useState({});
  const handleIncrement = (productId) => {
    setProductQuantities(prevState => ({
      ...prevState,
      [productId]: (prevState[productId] || 0) + 1
    }));
  };

  const handleDecrement = (productId) => {
    if (productQuantities[productId] > 0) {
      setProductQuantities(prevState => ({
        ...prevState,
        [productId]: prevState[productId] - 1
      }));
    }
  };

  return (
    <div>
      <Title title="CART"/>
      {cart.length === 0 ? (
        <Empty name="Cart is empty!"/>
      ) : (
        <div className={styles["cart-container"]}>
          {cart.map((product) => (
            <div className={styles["cart-item"]} key={product.id}>
              <div className={styles["item-info"]}>
                <img src={product.photo} alt={product.name} />
                <div className={styles["item-details"]}>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <p>Price: ${product.price}</p>
                </div>
              </div>
              <div className={styles["item-actions"]}>
                <button onClick={() => handleDecrement(product.id)}>-</button>
                <span>{productQuantities[product.id] || 0}</span>
                <button onClick={() => handleIncrement(product.id)}>+</button>
                <button onClick={() => removeFromCart(product)}>Remove</button>
              </div>
            </div>
          ))}
          <Link className={styles["checkout-link"]} to="/checkout">Checkout</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
