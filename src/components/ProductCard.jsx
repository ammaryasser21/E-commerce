import React, { useState } from "react";
import { Link } from "react-router-dom";
import Alert from './Alert.jsx';
import "./css/ProductCard.css";

const ProductCard = ({
  product,
  addToCart,
  addToWishlist,
  removeFromCart,
  removeFromWishlist,
  alerts,
  setAlerts,
  alertIndex,
  setAlertIndex,
}) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setIsAddedToCart(true);
    addAlert(alertIndex, product, 'success', 'cart');
    setAlertIndex(alertIndex+1);
  };

  const handleAddToWishlist = () => {
    addToWishlist(product);
    setIsAddedToWishlist(true);
    addAlert(alertIndex, product, 'success', 'wishlist');
    setAlertIndex(alertIndex+1);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product);
    setIsAddedToCart(false);
    addAlert(alertIndex, product, 'error', 'cart');
    setAlertIndex(alertIndex+1);
  };

  const handleRemoveFromWishlist = () => {
    removeFromWishlist(product);
    setIsAddedToWishlist(false);
    addAlert(alertIndex, product, 'error', 'wishlist');
    setAlertIndex(alertIndex+1);
  };

  const addAlert = (index, product, type, kind) => {
    const title = `${type === 'success' ? 'Added' : 'Removed'} ${product.name} ${type === 'success' ? 'to' : 'from'} ${kind === 'cart' ? 'cart' : 'wishlist'}`;
    const description = `${product.description}`;
    setAlerts([...alerts, { index, title, description, type }]);
  };

  return (
    <div className="product-card">
      <div className="product-photo">
        <Link to={{ pathname: "/ProductDetails", search: `?id=${product.id}` }}>
          <img
            src={product.photo}
            alt={product.name}
            className="product-image"
          />
        </Link>
        {product.discount !== 0 && (
          <span className="new-badge">
            - {((product.price - product.discount) / product.price) * 100}%
          </span>
        )}
        {isAddedToWishlist ? (
          <button className="wishlist-btn" onClick={handleRemoveFromWishlist}>
            <i className="fas fa-heart"></i>
          </button>
        ) : (
          <button className="wishlist-btn" onClick={handleAddToWishlist}>
            <i className="far fa-heart"></i>
          </button>
        )}
        {isAddedToCart ? (
          <button
            className="cart-btn"
            onClick={
              handleRemoveFromCart
            }
          >
            <i className="fas fa-remove"></i>RemoveFromCart
          </button>
        ) : (
          <button className="cart-btn" onClick={handleAddToCart}>
            <i className="fas fa-cart-plus"></i>AddToCart
          </button>
        )}
      </div>
      <div className="product-details">
        <Link to={{ pathname: "/ProductDetails", search: `?id=${product.id}` }}>
          <h3 className="product-name">{product.name}</h3>
        </Link>
        <h3 className="product-price">
          {product.discount > 0 ? (
            <>
              <span className="product-discount">${product.discount}</span>
              <span className="product-price">${product.price}</span>
            </>
          ) : (
            <span className="product-price">${product.price}</span>
          )}
        </h3>
      </div>
      <Alert alerts={alerts} addAlert={addAlert} setAlerts={setAlerts} />
    </div>
  );
};

export default ProductCard;
