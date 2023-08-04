import { useState } from "react";
import { Tab, Tabs } from "@mui/material";

import styles from "./Filters.module.css";

const filters = [
  { key: "all", label: "All" },
  { key: "rock", label: "Rock" },
  { key: "pop", label: "Pop" },
  { key: "jazz", label: "Jazz" },
  { key: "blues", label: "Blues" },
];
const Filters = () => {
  const [value, setValue] = useState("all");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs value={value} onChange={handleChange}>
        {filters.map((filter) => (
          <Tab
            key={filter.key}
            value={filter.key}
            label={filter.label}
            className={styles.tab}
          />
        ))}
      </Tabs>
    </>
  );
};

export default Filters;
