import Button from "../Button";
import styles from "./style.module.scss";

function Actions() {
  return (
    <div className={styles.actionsContainer}>
      <Button href="" text="Reproducir" className="play" icon="fas fa-play" />
      <Button
        href=""
        text="Más información"
        className="info"
        icon="fas fa-info-circle"
      />
    </div>
  );
}

export default Actions;
