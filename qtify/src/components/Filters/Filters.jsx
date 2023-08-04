import { useEffect, useState } from "react";
import { Tab, Tabs } from "@mui/material";

import styles from "./Filters.module.css";

import { getGenres } from "../../api-store/getGenres";

const filters = [
  { key: "all", label: "All" },
  { key: "jazz", label: "Jazz" },
  { key: "rock", label: "Rock" },
  { key: "pop", label: "Pop" },
  { key: "blues", label: "Blues" },
];

const Filters = ({ value = "all", setValue }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      let res = await getGenres();
      if (res) {
        res.unshift({ key: "all", label: "All" });
      } else {
        res = [...filters];
      }
      setGenres(res);
    };
    fetchGenres();

    return () => {};
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles.mainContainer}>
      <Tabs value={value} onChange={handleChange}>
        {genres?.map((genre) => (
          <Tab
            key={genre.key}
            value={genre.key}
            label={genre.label}
            className={styles.tab}
          />
        ))}
      </Tabs>
    </div>
  );
};

export default Filters;
