import styles from "./style.module.scss";
import Link from "next/link";

function Button(props) {
  const { text, className, href, icon } = props;
  return (
    <Link href={href} passHref>
      <div>
        <button className={`${styles.button} ${styles[className]}`}>
          <i className={`${icon} ${styles.icon}`} />
          {text}
        </button>
      </div>
    </Link>
  );
}

export default Button;
