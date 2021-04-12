import Navbar from "../../components/Navbar";
import BackgroundBanner from "../../components/BackgroundBanner/index";
import Texts from "../../components/Texts/index";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "./style.module.scss";
function Browser(props) {
  const router = useRouter();
  const { fromBrowser } = props;
  return (
    <>
      <Head>
        <title>Courflix</title>
        <link rel="shortcut icon" href="../icon.png" />
      </Head>
      <Navbar fromBrowser={router.pathname == "/browser"} />
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
          <Texts
            title="Peliculas y series ilimitadas y mucho más."
            subtitle="Disfrutalo donde quieras."
            className="containerLogin"
          />
          <Texts
            subtitle="Estoy trabajando en el registro, dale click a iniciar sesión"
            className="centerText"
          />
        </div>
      </div>
    </>
  );
}

export default Browser;
