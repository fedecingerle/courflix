import styles from "./style.module.scss";
import Button from "../Button/index";
import Logo from "../Logo";
import React from "react";

function Navbar(props) {
  const { fromBrowser, fromLogin } = props;

  return (
    <React.Fragment>
      {fromBrowser ? (
        <nav className={`${styles.navbar} ${styles.browser}`}>
          <Logo className="login" />
          <Button
            href="/browser/login"
            text={"Iniciar sesión"}
            className="login"
          />
        </nav>
      ) : fromLogin ? (
        <nav className={`${styles.navbar} ${styles.login}`}>
          <Logo className="login" />
        </nav>
      ) : (
        <nav className={`${styles.navbar} ${styles.nav}`}>
          <Logo className="navbar" />
        </nav>
      )}
    </React.Fragment>
  );
}

export default Navbar;
