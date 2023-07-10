import React from "react";
import { Divider, IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 568,
        border: "2px solid black",
        borderRadius: "8px",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search a album of your choice"
        inputProps={{ "aria-label": "search a album of your choice" }}
      />

      <Divider
        sx={{ height: 35, border: "1px solid black" }}
        orientation="vertical"
      />
      <IconButton type="button" sx={{ color: "black" }} aria-label="search">
        <SearchIcon fontSize="medium" />
      </IconButton>
    </Paper>
  );
};

export default Search;
