import Logo from "../Logo";
import styles from "./style.module.scss";
function Footer() {
  return (
    <div className={styles.container}>
      <img className={styles.image} src="../fedeCingerle.png" />
      <div className={styles.textContainer}>
        Made with <i className="fas fa-heart " /> Fede
      </div>
    </div>
  );
}

export default Footer;
