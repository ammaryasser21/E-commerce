import React from "react";
import "./css/About.css";
import Title from "./Title";
const About = () => {
  return ( 
    <>
    <Title title="ABOUT US"/>
    <div  className="container">
     
      <p className="h2">
        Furns is a global furniture destination for somethings. We sell
        cutting-edge furniture and offer a wide variety of fashion-related
        content.
      </p>
      <div className="images">
        <div className="img2">
          <img
            src={require("../assets/_images_about_02.jpg")}
            alt="img2"
            className="img2"
          />
        </div>
        <div className="img1">
          <img
            src={require("../assets/_images_about_01.jpg")}
            alt="img1"
            className="img1"
          />
        </div>
      </div>
      <div className="str">
        <div className=" OUR_STORES">
          <h3>OUR STORES</h3>
          <p>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse. Lorem ipsum dolor sit amet
            conse ctetur adipisicing elit, sed do eiusmod tempor.
          </p>
        </div>
        <div className="OUR_MISSION">
          <h3> OUR MISSION</h3>
          <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse. Lorem ipsum dolor sit amet
          conse ctetur adipisicing elit, sed do eiusmod tempor.</p>
          
        </div>
      </div>

    </div>
    </>
    
  );
};

export default About;
