import styles from "./style.module.scss";
import Link from "next/link";

function Button(props) {
  const { text, className, icon, onClick, iconClass } = props;

  return (
    <button
      className={`${styles.button} ${styles[className]}`}
      onClick={onClick}
    >
      <i aria-hidden className={`${icon} ${styles[iconClass]} `} />
      {text}
    </button>
  );
}

export default Button;
