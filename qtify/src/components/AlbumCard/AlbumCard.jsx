import Tooltip from "@mui/material/Tooltip";

import AlbumPlaceholder from "../../assets/album_placeholder.png";
import styles from "./AlbumCard.module.css";

const AlbumCard = ({ title, album }) => {
  return (
    <>
      {title !== "Songs" ? (
        <Tooltip title={`${album.songs.length} songs`} placement="top" arrow>
          <div className={styles.mainContainer}>
            <div className={styles.cardContainer}>
              <img
                className={styles.cardImage}
                src={album.image ? album.image : AlbumPlaceholder}
                alt="headphone"
                loading="lazy"
              />
              <div className={styles.cardText}>
                <span className={styles.cardFollows}>
                  {album.follows} Follows
                </span>
              </div>
            </div>
            <p className={styles.cardTitle}>{album.title}</p>
          </div>
        </Tooltip>
      ) : (
        <div className={styles.mainContainer}>
          <div className={styles.cardContainer}>
            <img
              className={styles.cardImage}
              src={album.image ? album.image : AlbumPlaceholder}
              alt="headphone"
              loading="lazy"
            />
            <div className={styles.cardText}>
              <span className={styles.cardFollows}>
                {album.follows} Follows
              </span>
            </div>
          </div>
          <p className={styles.cardTitle}>{album.title}</p>
        </div>
      )}
    </>
  );
};

export default AlbumCard;
