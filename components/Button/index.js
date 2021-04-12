import styles from "./style.module.scss";
import Link from "next/link";
function Button(props) {
  const { text, className, href } = props;
  return (
    <Link href={href} passHref>
      <button className={`${styles.button} ${styles[className]}`}>
        {text}
      </button>
    </Link>
  );
}

export default Button;
