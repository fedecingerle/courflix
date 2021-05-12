import styles from "./style.module.scss";
import Link from "next/link";

function TitleCategories(props) {
  const { categorie, href, className } = props;
  return (
    <Link href={href} passHref>
      <h2 className={`${styles[className]}`}>
        <a>
          <div>{categorie}</div>
        </a>
        <div className={styles.animation}>
          <div>Explorar todos</div>
          <i aria-hidden className="fas fa-chevron-right" />
        </div>
      </h2>
    </Link>
  );
}

export default TitleCategories;
