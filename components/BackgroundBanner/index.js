import styles from "./style.module.scss";

function BackgroundBanner(props) {
  const { url } = props;
  return (
    <div className={styles.backgroundCard}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} srcSet={url} alt="true" />
        <div className={styles.backgroundGradient}></div>
      </div>
    </div>
  );
}

export default BackgroundBanner;
