import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Hero from "./Hero.jsx";
import "./css/Home.css";
import ProductList from "./ProductList.jsx";
import { useProducts } from "../ProductContext.js";
import { useWishlistCart } from "../WishlistCartContext.js";


const Home = () => {
  const { products } = useProducts();
  const categories = [
    {
      index: 1,
      category: "Bedroom",
      imageSrc:
        "https://cdn.shopify.com/s/files/1/0864/0607/0562/collections/living-room.png",
      altText: "Bedroom furniture",
    },
    {
      index: 2,
      category: "Living",
      imageSrc:
        "https://cdn.shopify.com/s/files/1/0864/0607/0562/collections/living-room.png",
      altText: "Living room furniture",
    },
    {
      index: 3,
      category: "Dining",
      imageSrc:
        "https://cdn.shopify.com/s/files/1/0864/0607/0562/collections/living-room.png",
      altText: "Dining room furniture",
    },
    {
      index: 4,
      category: "Lounge",
      imageSrc:
        "https://cdn.shopify.com/s/files/1/0864/0607/0562/collections/living-room.png",
      altText: "Lounge furniture",
    },
    {
      index: 5,
      category: "Office Chair",
      imageSrc:
        "https://cdn.shopify.com/s/files/1/0864/0607/0562/collections/living-room.png",
      altText: "Office chairs",
    },
  ];

  const [filteredProducts, setFilteredProducts] = useState(products);
  const { addToCart, addToWishlist, removeFromCart, removeFromWishlist } = useWishlistCart();
  const [activeFilter, setActiveFilter] = useState("New Arrival");
  const handleFilter = (filterOption) => {
    let filteredProducts = [];
    if (filterOption === "New Arrival") {
      filteredProducts = products.filter(product => product.isNew);
    } else if (filterOption === "Featured") {
      filteredProducts = products.filter(product => product.isFeatured);
    } else if (filterOption === "Trending") {
      filteredProducts = products.filter(product => product.isTrending);
    } else {
      filteredProducts = products.filter(product => product.isOnSale);
    }
    setFilteredProducts(filteredProducts);
    setActiveFilter(filterOption);
  }; 
  useEffect(() => {
    handleFilter(activeFilter);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFilter]);

  useEffect(() => {
    handleFilter(activeFilter);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="Home-comp">
      <Hero />
      <div className="product-categories">
        <div className="category-grid">
          {categories.map((categoryData) => (
            <div key={categoryData.index} className="category">
              <Link to={{ pathname: "/ProductCat", search: `?category=${categoryData.category}` }}>
                <img src={categoryData.imageSrc} alt={categoryData.altText} />
                <div className="category-name">{categoryData.category}</div>
              </Link>
            </div>
          ))}
        </div>
        <div className="title">Our Products</div>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
        <div className="filter-options">
          <span className={`filter-option ${activeFilter === "New Arrival" ? "active" : ""}`} onClick={() => handleFilter("New Arrival")}>New Arrival</span>
          <span className={`filter-option ${activeFilter === "Featured" ? "active" : ""}`} onClick={() => handleFilter("Featured")}>Featured</span>
          <span className={`filter-option ${activeFilter === "Trending" ? "active" : ""}`} onClick={() => handleFilter("Trending")}>Trending</span>
          <span className={`filter-option ${activeFilter === "On Sale" ? "active" : ""}`} onClick={() => handleFilter("On Sale")}>On Sale</span>
        </div>
        <div className="Product-List">
          <ProductList 
            products={filteredProducts}
            addToCart={addToCart}
            addToWishlist={addToWishlist}
            removeFromCart={removeFromCart}
            removeFromWishlist={removeFromWishlist}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
