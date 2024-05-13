import React, { useState } from 'react';
import './css/Wishlist.css';
import Title from './Title';
import Empty from './Empty';
import Alert from './Alert';
import { useWishlistCart } from "../WishlistCartContext.js";
import { Link} from 'react-router-dom';

const Wishlist = () => {
  const [alerts, setAlerts] = useState([]);
  const [alertIndex, setAlertIndex] = useState(0);
  const { wishlist, addToCart, removeFromWishlist } = useWishlistCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    addAlert(alertIndex, product, 'success', 'cart');
    setAlertIndex(alertIndex + 1);
  };

  const handleRemoveFromWishlist = (product) => {
    removeFromWishlist(product);
    addAlert(alertIndex, product, 'error', 'wishlist');
    setAlertIndex(alertIndex + 1);
  };

  const addAlert = (index, product, type, kind) => {
    const title = `${type === 'success' ? 'Added' : 'Removed'} ${product.name} ${type === 'success' ? 'to' : 'from'} ${kind === 'cart' ? 'cart' : 'wishlist'}`;
    const description = `${product.description}`;
    setAlerts([...alerts, { index, title, description, type }]);
  };

  return (
    <>
      <Title title="WISHLIST" />
      <div className="wishlist-container">
        {wishlist.length === 0 ? (
          <Empty name="Wishlist is empty" />
        ) : (
          <div className="wishlist-table">
            <table>
              <thead>
                <tr>
                  <th>IMAGE</th>
                  <th>PRODUCT NAME</th>
                  <th>UNIT PRICE</th>
                  <th>ADD TO CART</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {wishlist.map((product) => (
                  <tr key={product._id}>
                    <td>
                      <Link className="img-link" to={{ pathname: "/ProductDetails", search: `?id=${product._id}` }}>
                        <img src={product.photo} alt={product.name} />
                      </Link>
                    </td>
                    <td>
                      <Link className="name-link" to={{ pathname: "/ProductDetails", search: `?id=${product._id}` }}>
                        {product.name}
                      </Link>
                    </td>
                    <td>${product.price}</td>
                    <td>
                      <button onClick={() => handleAddToCart(product)} className="add-to-cart">
                        Add to Cart
                      </button>
                    </td>
                    <td>
                      <button onClick={() => handleRemoveFromWishlist(product)} className="remove-item">
                        <i className="fas fa-trash-alt" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <Alert alerts={alerts} addAlert={addAlert} setAlerts={setAlerts} />
    </>
  );
};

export default Wishlist;