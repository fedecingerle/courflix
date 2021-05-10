import { useContext } from "react";
import Button from "../Button";
import styles from "./style.module.scss";
import ToggleEpisodesContext from "../../context/ToggleEpisodes";
function Actions() {
  const { handleToggle } = useContext(ToggleEpisodesContext);

  return (
    <div className={styles.actionsContainer}>
      <div className={styles.listContainer}>
        <Button
          text="Mi lista"
          icon="fas fa-plus"
          className="myList"
          iconClass="iconPlus"
        />
      </div>
      <div className={styles.playContainer}>
        <Button
          text="Reproducir"
          className="play"
          icon="fas fa-play"
          iconClass="iconPlay"
          onClick={handleToggle}
        />
      </div>
      <div className={styles.plusInfoContainer}>
        <Button
          onClick={handleToggle}
          text="Más información"
          className="info"
          icon="fas fa-info-circle"
          iconClass="iconInfo"
        />
      </div>
      <div className={styles.infoContainer}>
        <Button
          onClick={handleToggle}
          text="Info"
          className="info"
          icon="fas fa-info-circle"
          iconClass="iconInfo"
        />
      </div>
    </div>
  );
}

export default Actions;
