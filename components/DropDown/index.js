import React, { useState } from "react";
import styles from "./style.module.scss";
function DropDown() {
  const seasons = ["Temporada 1", "Temporada 2", "Temporada 3"];
  const [selectedSeason, setSelectedSeason] = useState(seasons[0]);
  const [active, setActive] = useState(false);

  //THIS IS UGLY, I HAVE TO MAKE THE SEASONS FUNCTIONAL. (SEASONS FROM FILMS API)

  function handleClick() {
    setActive(prevState => !prevState);
  }
  function handleChange(key) {
    setSelectedSeason(seasons[key]);
    setActive(false);
  }

  return (
    <div className={styles.container}>
      <div onClick={() => handleClick()} className={styles.filmSeason}>
        {selectedSeason}
      </div>

      <ul
        className={
          active ? `${styles.seasons} ${styles.visible}` : styles.seasons
        }
      >
        {seasons.map((season, key) => {
          return <li onClick={() => handleChange(key)}>{season}</li>;
        })}
      </ul>
    </div>
  );
}
export default DropDown;
