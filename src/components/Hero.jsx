import React from "react";
import { Link } from "react-router-dom";
import "./css/Hero.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import Carousel from "react-bootstrap/Carousel";
import im1 from "../assets/slider-2-2.jpg";
import im2 from "../assets/slider-2-1.jpg";
const Hero = () => {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
        <img src={im1} className="d-block w-100" alt="..." />
        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
          <h3 style={{ color: "white" }}>New Products</h3>
          <h1 style={{ color: "white", fontSize: "80px" }}>Flexible Chair</h1>
          <p style={{ color: "white" }}>
            Torem ipsum dolor sit amet, consectetur adipisicing elitsed do
            eiusmo tempor incididunt ut labore et dolore magna
          </p>
          <Link to={{ pathname: "/Products"}}>
            <button className="m-3 btn-O">Shop Now</button>
          </Link>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img src={im2} className="d-block w-100" alt="..." />
        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
          <h3 style={{ color: "white" }}>New Products</h3>
          <h1 style={{ color: "white", fontSize: "80px" }}>Flexible Chair</h1>
          <p style={{ color: "white" }}>
            Torem ipsum dolor sit amet, consectetur adipisicing elitsed do
            eiusmo tempor incididunt ut labore et dolore magna
          </p>
          <Link to={{ pathname: "/Products"}}>
            <button className="m-3 btn-O">Shop Now</button>
          </Link>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;
