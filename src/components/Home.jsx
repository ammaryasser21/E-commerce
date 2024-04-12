import React from "react";
import Hero from "./Hero.jsx";
import "./css/Home.css"

const Home = () => {
  const categories = [
    { category: 'Bedroom', imageSrc: 'https://cdn.shopify.com/s/files/1/0864/0607/0562/collections/living-room.png', altText: 'Bedroom furniture' },
    { category: 'Living', imageSrc: 'https://cdn.shopify.com/s/files/1/0864/0607/0562/collections/living-room.png', altText: 'Living room furniture' },
    { category: 'Dining', imageSrc: 'https://cdn.shopify.com/s/files/1/0864/0607/0562/collections/living-room.png', altText: 'Dining room furniture' },
    { category: 'Lounge', imageSrc: 'https://cdn.shopify.com/s/files/1/0864/0607/0562/collections/living-room.png', altText: 'Lounge furniture' },
    { category: 'Office Chair', imageSrc: 'https://cdn.shopify.com/s/files/1/0864/0607/0562/collections/living-room.png', altText: 'Office chairs' },
  ];

  return (
    <div>
      <Hero />
      <div className="product-categories">
        <div className="category-grid">
          {categories.map((categoryData, index) => (
            <div key={index} className="category">
              <img src={categoryData.imageSrc} alt={categoryData.altText} />
              <div className="category-name">{categoryData.category}</div>
            </div>
          ))}
        </div>
        <div className="title">Our Products</div>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        </p>
        <div className="filter-options">
          <span className="filter-option">New Arrival</span>
          <span className="filter-option">Featured On Sale</span>
          <span className="filter-option">Trending</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
