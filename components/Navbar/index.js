import React, { useState } from "react";
import styles from "./style.module.scss";
import Button from "../Button/index";
import Logo from "../Logo";

function Navbar(props) {
  const [scroll, setScroll] = useState(false);
  const { fromBrowser, fromLogin } = props;

  function changeNav() {
    if (window.scrollY >= 1080) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }

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
        <>
          <nav className={`${styles.navbar} ${styles.home}`}>
            <Logo className="home" />
            <div className={styles.deskNav}>
              <ul className={styles.firstNav}>
                <li>Inicio</li>
                <li>Series</li>
                <li>Peliculas</li>
                <li>Novedades Populares</li>
                <li>Mi lista</li>
              </ul>
              <div className={styles.secondNav}>
                <input />
              </div>
            </div>
            <ul className={styles.mobNav}>
              <li>Series</li>
              <li>Películas</li>
              <li>Categorías</li>
            </ul>
          </nav>
        </>
      )}
    </React.Fragment>
  );
}

export default Navbar;
