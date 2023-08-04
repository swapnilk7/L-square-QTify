import React from "react";

import { Grid } from "@mui/material";
import AlbumCard from "../AlbumCard/AlbumCard";

const CardGrid = ({ data }) => {
  return (
    <Grid container spacing={{ xs: 2, md: 3 }}>
      {data?.map((album) => (
        <Grid item xs={6} sm={3} md={2} key={album.id}>
          <AlbumCard album={album} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardGrid;
