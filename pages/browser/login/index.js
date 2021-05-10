import { useRouter } from "next/router";
import Head from "next/head";
import Navbar from "../../../components/Navbar";
import BackgroundBanner from "../../../components/BackgroundBanner";
import styles from "../login/style.module.scss";
import Link from "next/link";

function Login(props) {
  const router = useRouter();
  const { fromLogin } = props;

  return (
    <>
      <Navbar fromLogin={router.pathname == "/browser/login"} />
      <div className={styles.container}>
        <div className={styles.backgroundContainer}>
          <BackgroundBanner
            url="https://assets.nflxext.com/ffe/siteui/vlv3/92bb3a0b-7e91-40a0-b27b-f2c3ac9ef6e4/274c7c91-cfc0-4b4b-8304-450de9e70723/AR-es-20210322-popsignuptwoweeks-perspective_alpha_website_small.jpg
      1000w,
      https://assets.nflxext.com/ffe/siteui/vlv3/92bb3a0b-7e91-40a0-b27b-f2c3ac9ef6e4/274c7c91-cfc0-4b4b-8304-450de9e70723/AR-es-20210322-popsignuptwoweeks-perspective_alpha_website_medium.jpg
      1500w,
      https://assets.nflxext.com/ffe/siteui/vlv3/92bb3a0b-7e91-40a0-b27b-f2c3ac9ef6e4/274c7c91-cfc0-4b4b-8304-450de9e70723/AR-es-20210322-popsignuptwoweeks-perspective_alpha_website_large.jpg
      1800w"
          />
          <div className={styles.loginContainer}>
            <div className={styles.loginContent}>
              <h1 className={styles.h1}>Inicia sesión </h1>
              <form className={styles.loginForm}>
                <div className={styles.inputContainer}>
                  <input
                    className={styles.input}
                    placeholder="Email o número de teléfono"
                  />
                </div>
                <div className={styles.inputContainer}>
                  <input className={styles.input} placeholder="Contraseña" />
                </div>
                <Link href="/home">
                  <button className={styles.button}> Iniciar sesión</button>
                </Link>
              </form>
            </div>
            <div>
              <p style={{ color: "white" }}>
                Estoy trabajando en el login :)
                <br /> Dale click a "iniciar sesión" y disfrutá.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
