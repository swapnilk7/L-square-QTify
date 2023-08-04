import React, { useEffect, useState } from "react";

import Carousel from "../Carousel/Carousel";
import styles from "./Albums.module.css";
import CardGrid from "../CardGrid/CardGrid";
import Filters from "../Filters/Filters";

const Albums = ({ title, albums }) => {
  const [genre, setGenre] = useState("all");
  const [collapseToggle, setCollapseToggle] = useState(true);
  const [filteredAlbums, setFilteredAlbums] = useState([]);

  useEffect(() => {
    if (title === "Songs") {
      if (genre === "all") {
        setFilteredAlbums(albums);
      } else {
        console.log("genre", genre);
        const list = albums.filter((song) => song.genre.key === genre);
        setFilteredAlbums(list);
      }
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [genre, albums]);

  const handleToggle = () => {
    setCollapseToggle((prev) => !prev);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.header}>
        <h4>{title}</h4>
        {title !== "Songs" && (
          <h4 onClick={handleToggle} className={styles.collapse}>
            {collapseToggle ? "Show All" : "Collapse"}
          </h4>
        )}
      </div>
      {title === "Songs" && <Filters value={genre} setValue={setGenre} />}
      {title === "Songs" && <Carousel title={title} data={filteredAlbums} />}
      {title !== "Songs" ? (
        collapseToggle ? (
          <Carousel title={title} data={albums} />
        ) : (
          <CardGrid data={albums} />
        )
      ) : (
        <></>
      )}
    </div>
  );
};

export default Albums;
