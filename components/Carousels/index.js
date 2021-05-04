import React from "react";
import styles from "./style.module.scss";
import TitleCategories from "../TitleCategories/index";
import Slider from "react-slick";

function Carousels(props) {
  const { tendencie, original, categorie } = props;

  function FilmsSlide(props) {
    const { image, title } = props;
    return (
      <div className={styles.filmContainer}>
        <div className={styles.filmPhoto}>
          <div
            className={styles.photo}
            style={{ backgroundImage: `url(${image})` }}
          />
        </div>
        <div className={styles.actions}>
          <p>{title}</p>
        </div>
      </div>
    );
  }
  function BigSlides(props) {
    const { image, title } = props;
    return (
      <div className={styles.bigSlides}>
        <img className={styles.image} src={image} />
        <div className={styles.overlay}></div>
        <div className={styles.actions}>
          <p>{title}</p>
        </div>
      </div>
    );
  }
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    dots: false
  };

  return (
    <div className={styles.carouselContainer}>
      <TitleCategories categorie="Tendencias" />
      <Slider {...settings} style={{ textAlign: "center" }}>
        {tendencie.data.map((film, key) => {
          const { image, title } = film;
          return <FilmsSlide image={image} title={title} />;
        })}
      </Slider>
      <TitleCategories categorie="Originales de Courflix" />
      <Slider {...settings} style={{ textAlign: "center" }}>
        {original.data.map((film, key) => {
          const { image, title } = film;
          return <BigSlides image={image} title={title} />;
        })}
      </Slider>
    </div>
  );
}

export default Carousels;
