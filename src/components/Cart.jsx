import React, { useState } from 'react';
import './css/Cart.css'; // Adjust the path if needed

import Title from './Title';  
import Empty from './Empty';
import { useWishlistCart } from "../WishlistCartContext.js";
import { Link,useNavigate } from 'react-router-dom';


const Cart = () => {
  const { cart, setCart, removeFromCart } = useWishlistCart();
  
const navigate = useNavigate();
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

  const calculateSubtotal = (product) => {
    return product.price * (productQuantities[product.id] || 1);
  };

  const calculateGrandTotal = () => {
    return cart.reduce((acc, product) => acc + calculateSubtotal(product), 0);
  };

  const handleClearCart = () => {
    setCart([]);
  };
  
  const handleCheckout = () => {
    navigate('/checkout', { replace: true })
  };
  return (
    <>
    <Title title="CART"/>
    <div className="cart-container">
      
      {cart.length === 0 ? (
        <Empty name="Cart is empty"/>
      ) : (
        <div className="shopping-cart">
          <table>
            <thead>
              <tr>
                <th>IMAGE</th>
                <th>PRODUCT NAME</th>
                <th>UNIT PRICE</th>
                <th>QTY</th>
                <th>SUBTOTAL</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => (
                <tr key={product.id}>
                  <td>
                    <Link className="img-link" to={{ pathname: "/ProductDetails", search: `?id=${product.id}` }}><img src={product.photo} alt={product.name} /></Link>
                  </td>
                  <td><Link className="name-link" to={{ pathname: "/ProductDetails", search: `?id=${product.id}` }}>{product.name}</Link></td>
                  <td>${product.price}</td>
                  <td>
                    <button onClick={() => handleDecrement(product.id)} className="quantity-minus">-</button>
                    <input type="number" value={productQuantities[product.id] || 1} className="quantity-input" />
                    <button onClick={() => handleIncrement(product.id)} className="quantity-plus">+</button>
                  </td>
                  <td>${calculateSubtotal(product).toFixed(2)}</td>
                  <td>
                    <button onClick={() => removeFromCart(product)} className="remove-item"><i className="fas fa-trash-alt"></i></button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="6" className="cart-summary">
                  <div className="grand-total">
                    <span>Grand Total:</span>
                    <span>${calculateGrandTotal().toFixed(2)}</span>
                     </div>
                </td>
              </tr>
            </tfoot>
          </table>
          <div className="cart-actions">

            <button className="clear-cart" onClick={handleClearCart}>CLEAR CART</button>
            <button className="checkout" onClick={handleCheckout}>
PROCEED TO CHECKOUT
</button>
            
            
            
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default Cart;