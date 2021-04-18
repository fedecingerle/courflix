import styles from "./style.module.scss";

function Banner(props) {
  const { image } = props;
  return (
    <div className={styles.container}>
      <img className={styles.imageBackground} src={image} />
      <div className={styles.backgroundGradient}></div>
    </div>
  );
}

export default Banner;
