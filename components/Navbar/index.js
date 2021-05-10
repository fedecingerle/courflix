import React, { useState } from "react";
import styles from "./style.module.scss";
import Button from "../Button/index";
import Logo from "../Logo";
import Link from "next/link";

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
            <a href={"/home"} style={{ margin: "auto" }}>
              <Logo className="home" />
            </a>
            <div className={styles.deskNav}>
              <ul className={styles.firstNav}>
                <Link href={"/home"}>
                  <li>Inicio</li>
                </Link>
                <Link href={"/home/series"}>
                  <li>Series</li>
                </Link>
                <Link href={"/home/films"}>
                  <li>Peliculas</li>
                </Link>
                <li>Tendencias</li>
                <Link href={"/home/myList"}>
                  <li>Mi lista</li>
                </Link>
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
