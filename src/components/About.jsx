import React from "react";
import styles from "./css/About.module.css";
import Title from "./Title";

const About = () => {
  return (
    <>
      <Title title="ABOUT US" />
      <div className={styles.container}> {/* Use styles.container */}
        <p className={styles.h2}>
          Furns is a global furniture destination for somethings. We sell
          cutting-edge furniture and offer a wide variety of fashion-related
          content.
        </p>
        <div className={styles.images}> {/* Use styles.images */}
          <img
            src={require("../assets/_images_about_02.jpg")}
            alt="img2"
            className={styles.img2}
          />
          <img
            src={require("../assets/_images_about_01.jpg")}
            alt="img1"
            className={styles.img1}
          />
        </div>
        <div className={styles.str}> {/* Use styles.str */}
          <div className={styles.OUR_STORES}> {/* Use styles.OUR_STORES */}
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
          <div className={styles.OUR_MISSION}> {/* Use styles.OUR_MISSION */}
            <h3>OUR MISSION</h3>
            <p>
              Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse. Lorem ipsum dolor sit amet
              conse ctetur adipisicing elit, sed do eiusmod tempor.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
