import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Title from "./Title";
import Empty from "./Empty";
import RelPro from "./RelPro.jsx";
import Reviews from "./Reviews.jsx"
import { useProducts } from "../ProductContext.js";
import { useWishlistCart } from "../WishlistCartContext.js";
import "./css/ProductDetails.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Alert from './Alert.jsx';


const ProductDetails = () => {
  const location = useLocation();
  const { products,onAddReview } = useProducts();
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(0);
  const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);
  const { addToCart, addToWishlist, removeFromWishlist } = useWishlistCart();
  
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const idParam = queryParams.get("id");
    // eslint-disable-next-line eqeqeq
    const foundProduct = products.find((product) => product.id == idParam);

    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      setProduct(null);
    }
  }, [location.search, products]);
  const [alerts, setAlerts] = useState([]);
  const [alertIndex, setAlertIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState("Description");
  const handleAddToCart = () => {
    addToCart(product);
    addAlert(alertIndex, 'Added to cart', 'Product has been added to your cart','success');
    setAlertIndex(alertIndex + 1); 
  };

  const handleAddToWishlist = () => {
    addToWishlist(product);
    setIsAddedToWishlist(true);
    addAlert(alertIndex, 'Added to wishlist', 'Product has been added to your wishlist','success');
    setAlertIndex(alertIndex + 1); 
  };

  
  const handleRemoveFromWishlist = () => {
    removeFromWishlist(product);
    setIsAddedToWishlist(false);
    addAlert(alertIndex, 'Removed from wishlist', 'Product has been removed from your wishlist','error');
    setAlertIndex(alertIndex + 1); 
  };

  const addAlert = (index, title, description, type) => {
    setAlerts([...alerts, { index, title, description, type }]);
  };

  const handleFilter = (option) => {
    setActiveFilter(option);
  };

  return (
    <div>
      {product ? (
        <>
          <Title title="PRODUCT DETAILS" />
          <section className="section">
            <div className="images">
              <img src={product.photo} alt={product.name} />
            </div>
            <div className="product_details">
              <div className="SKU">
                <p>
                  <strong>SKU:</strong>
                   {product.id}
                </p>
              </div>
              <div className="Availability">
                <p>
                  <strong>Availability: </strong>
                  {product.capacity} in Stock
                </p>
              </div>
              <div className="detail">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
              </div>
              <div className="price">
                <del className="oldPrice">${product.discount}</del>
                <p className="newPrice">${product.price}</p>
              </div>
              <div className="button_container">
                <div className="counter_container">
                  <button onClick={handleDecrement} className="counter_button">
                    -
                  </button>
                  <div className="counter_value">{count}</div>
                  <button onClick={handleIncrement} className="counter_button">
                    +
                  </button>
                </div>
                <button className="cart-btn" onClick={handleAddToCart}>
                  <i className="fas fa-cart-plus"></i>AddToCart
                </button>
              </div>
              <div className="wishlist_compare_container">
                <button className="wishlist-btn" onClick={isAddedToWishlist ? handleRemoveFromWishlist : handleAddToWishlist}>
                  {isAddedToWishlist ? (
                    <i style={{ paddingRight: '10px' }} className="fas fa-heart"></i>
                  ) : (
                    <i style={{ paddingRight: '10px' }} className="far fa-heart"></i>
                  )}
                  Add to Wishlist
                </button>
              </div>
              <div className="share">
                <p>Share:</p>
                <div className="social-icons">
                  <a href=" " target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href=" " target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href=" " target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="des_rev">
          <div className="filter-options-2">
  <button className={`filter-option-2 ${activeFilter === "Description" ? "active-2" : ""}`} onClick={() => handleFilter("Description")}>Description</button>
  <button className={`filter-option-2 ${activeFilter === "Reviews" ? "active-2" : ""}`} onClick={() => handleFilter("Reviews")}>Reviews</button>
</div>

            <div className="mainBorder">
              {activeFilter === "Description" ? (
                  <div style={{ color: 'rgb(71, 71, 71)', margin: '10px' }}>{product.description}</div>
            ) : (
              <Reviews id={product.id} reviews={product.reviews} onAddReview={onAddReview} />
            )}
            </div>
            
          </section>
          <RelPro type={product.category} />
        </>
      ) : (
        <Empty name="Product Not Found!" />
      )}
      
      <Alert alerts={alerts} addAlert={addAlert} setAlerts={setAlerts} />
    </div>
  );
};

export default ProductDetails;
