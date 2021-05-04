import styles from "./style.module.scss";
function TitleCategories(props) {
  const { categorie } = props;
  return (
    <h2 className={styles.titleContainer}>
      <a>
        <div>{categorie}</div>
      </a>
      <div className={styles.animation}>
        <div>Explorar todos</div>
        <i class="fas fa-chevron-right" />
      </div>
    </h2>
  );
}

export default TitleCategories;
