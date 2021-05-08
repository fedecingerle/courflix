import React, { useState } from "react";
import styles from "./style.module.scss";
import Button from "../Button/index";
import Logo from "../Logo";

function Navbar(props) {
  const [showInput, setShowInput] = useState(false);
  const { fromBrowser, fromLogin } = props;

  function handleShow() {
    setShowInput(prevState => !prevState);
  }

  function handleChange(e) {
    const { value } = e.target;
    props.handleSearch(value);
  }

  return (
    <React.Fragment>
      {fromBrowser ? (
        <nav className={`${styles.navbar} ${styles.browser}`}>
          <Logo className="login" />
          <a href="/browser/login">
            <Button text={"Iniciar sesión"} className="login" />
          </a>
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
              <div className={styles.searchBox}>
                <i
                  aria-hidden
                  className={`fas fa-search ${styles.search}`}
                  onClick={handleShow}
                />
                {showInput && (
                  <input
                    onChange={handleChange}
                    type="text"
                    className={styles.inputSearch}
                    placeholder="Titulos"
                  />
                )}
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
