import React, { useState } from 'react';
import styles from './css/Checkout.module.css';
import { useWishlistCart } from "../WishlistCartContext.js";
import Title from './Title';  

const Checkout = () => {
  const { cart } = useWishlistCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, like sending data to backend
    console.log(formData);

    setFormData({
      name: '',
      email: '',
      address: '',
      phoneNumber: ''
    });
  };



  return (
    <>
    <Title title="CART"/>
    <div className={styles.checkoutContainer}>
      <h2 className={styles.checkoutHeading}>Checkout</h2>
      <div className={styles.checkoutItems}>
        {cart.length > 0 ? (
          cart.map((item) => (
            <div key={item.id} className={styles.checkoutItem}>
              <div className={styles.itemName}>{item.name}</div>
              <div className={styles.itemPrice}>{item.price * item.number}</div>
            </div>
          ))
        ) : (
          <div className={styles.emptyCartMessage}>Your cart is empty</div>
        )}
      </div>
      <form className={styles.orderForm} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
        <button type="submit">Place Order</button>
      </form>
    </div>
    </>
  );
}

export default Checkout;
