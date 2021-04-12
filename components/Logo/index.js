import React from "react";
import styles from "./style.module.scss";

function Logo(props) {
  const { className } = props;
  return <img className={`${styles[className]}`} src="../courflix.png" />;
}

export default Logo;
