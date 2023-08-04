import React from "react";

import Headphone from "../../assets/vibrating-headphone 1.png";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={styles.mainContainer}>
      <div>
        <p className={styles.heroText}>100 Thousand Songs, ad-free</p>
        <p className={styles.heroText}>Over thousands podcast episodes</p>
      </div>
      <img src={Headphone} alt="headphones" width={212} height={212} />
    </div>
  );
};

export default HeroSection;
