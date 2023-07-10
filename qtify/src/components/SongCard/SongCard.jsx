import React from "react";

import styles from "./SongCard.module.css";

const SongCard = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.cardContainer}>
        <img
          className={styles.cardImage}
          src="https://th.bing.com/th/id/OIP.YYgJscCJOLEEKRvDIslsOgAAAA?w=205&h=304&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="headphone"
        />
        <div className={styles.cardText}>
          <span className={styles.cardFollows}>100 Follows</span>
        </div>
      </div>
      <p className={styles.cardTitle}>New Bollywood</p>
    </div>
  );
};

export default SongCard;
