import Actions from "../Actions";
import styles from "./style.module.scss";

function Texts(props) {
  const { title, subtitle, className, image } = props;
  return (
    <div className={`${styles[className]}`}>
      <img src={image} />
      <h1 className={styles.h1}>{title}</h1>
      <h2 className={styles.h2}>{subtitle}</h2>
      {className == "banner" && <Actions />}
    </div>
  );
}
export default Texts;
