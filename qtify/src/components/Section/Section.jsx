import React, { useState } from "react";

import styles from "./Section.module.css";
import Filters from "../Filters/Filters";

const Section = (props) => {
  const { type, filterSource, data, title } = props;
  const [filters, setFilters] = useState({ key: "all", label: "All" });
  const [collapseToggle, setCollapseToggle] = useState(true);

  const handleToggle = () => {
    setCollapseToggle((prev) => !prev);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.header}>
        <h4>Top Albums</h4>
        <h4 onClick={handleToggle} className={styles.collapse}>
          {collapseToggle ? "Show All" : "Collapse"}
        </h4>
      </div>
      <Filters />
    </div>
  );
};

export default Section;
