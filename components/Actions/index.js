import { useContext } from "react";
import Button from "../Button";
import styles from "./style.module.scss";
import ToggleEpisodesContext from "../../context/ToggleEpisodes";
function Actions() {
  const { handleToggle } = useContext(ToggleEpisodesContext);

  return (
    <div className={styles.actionsContainer}>
      <Button
        text="Reproducir"
        className="play"
        icon="fas fa-play"
        onClick={handleToggle}
      />
      <Button
        onClick={handleToggle}
        text="Más información"
        className="info"
        icon="fas fa-info-circle"
      />
    </div>
  );
}

export default Actions;
