import Button from "../Button";
import styles from "./style.module.scss";

function Actions() {
  return (
    <div className={styles.actionsContainer}>
      <Button href="" text="Reproducir" className="play" />
      <Button href="" text="Más información" className="info" />
    </div>
  );
}

export default Actions;
