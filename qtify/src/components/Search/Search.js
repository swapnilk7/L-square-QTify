import React from "react";
import { Divider, IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import styles from "./Search.module.css";

const Search = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("helo");
  };
  return (
    <Paper component="form" className={styles.mainForm} onSubmit={handleSubmit}>
      <InputBase
        className={styles.searchInput}
        required={true}
        placeholder="Search a album of your choice"
        inputProps={{ "aria-label": "search a album of your choice" }}
      />

      <Divider className={styles.divider} orientation="vertical" />
      <IconButton
        type="button"
        className={styles.searchButton}
        aria-label="search"
        onClick={handleSubmit}
      >
        <SearchIcon fontSize="medium" />
      </IconButton>
    </Paper>
  );
};

export default Search;
