import styles from "./style.module.scss";

function BackgroundBanner(props) {
  const { url } = props;
  return (
    <div className={styles.backgroundCard}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/92bb3a0b-7e91-40a0-b27b-f2c3ac9ef6e4/274c7c91-cfc0-4b4b-8304-450de9e70723/AR-es-20210322-popsignuptwoweeks-perspective_alpha_website_small.jpg
      1000w,
      https://assets.nflxext.com/ffe/siteui/vlv3/92bb3a0b-7e91-40a0-b27b-f2c3ac9ef6e4/274c7c91-cfc0-4b4b-8304-450de9e70723/AR-es-20210322-popsignuptwoweeks-perspective_alpha_website_medium.jpg
      1500w,
      https://assets.nflxext.com/ffe/siteui/vlv3/92bb3a0b-7e91-40a0-b27b-f2c3ac9ef6e4/274c7c91-cfc0-4b4b-8304-450de9e70723/AR-es-20210322-popsignuptwoweeks-perspective_alpha_website_large.jpg
      1800w"
          alt="true"
        />
        <div className={styles.backgroundGradient}></div>
      </div>
    </div>
  );
}

export default BackgroundBanner;
