import { useEffect, useState } from "react";

import Albums from "../Albums/Albums";

import styles from "./Section.module.css";
import { getTopAlbums } from "../../api-store/getTopAlbums";
import { getNewAlbums } from "../../api-store/getNewAlbums";
import { getSongs } from "../../api-store/getSongs";

const Section = (props) => {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      const topAlbumList = await getTopAlbums();
      setTopAlbums(topAlbumList);
      const newAlbumList = await getNewAlbums();
      setNewAlbums(newAlbumList);
      const songsList = await getSongs();
      setSongs(songsList);
    };
    fetchAlbums();
    return () => {};
  }, []);

  return (
    <div className={styles.mainContainer}>
      <Albums title="Top Albums" albums={topAlbums} />
      <Albums title="New Albums" albums={newAlbums} />
      <Albums title="Songs" albums={songs} />
    </div>
  );
};

export default Section;
