import styles from "./style.module.scss";

function Texts(props) {
  const { title, subtitle, className } = props;
  return (
    <div className={`${styles[className]}`}>
      <h1 className={styles.h1}>{title}</h1>
      <h2 className={styles.h2}>{subtitle}</h2>
    </div>
  );
}
export default Texts;
