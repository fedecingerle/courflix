import React from "react";
import styles from "./style.module.scss";
import TitleCategories from "../TitleCategories/index";
import Slider from "react-slick";
import Link from "next/link";

function Carousels(props) {
  const { tendencie, original, filter } = props;

  function FilmsSlide(props) {
    const { image, title, id } = props;
    return (
      <Link href={`/home/${id}`}>
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
      </Link>
    );
  }
  function BigSlides(props) {
    const { image, title, _id } = props;
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

  // THERE IS A PROBLEM IN THE CARROUSEL LIBRARY THAT DUPLICATES
  // THE MOVIE WHEN FILTERING IT IN THE SEARCH
  // THE FIRTS SOLUTION IS TO CHANGE THE FILTERING LOGIC

  return (
    <div className={styles.carouselContainer}>
      <TitleCategories categorie="Tendencias" href="/home/tendencias" />
      <Slider {...settings} style={{ textAlign: "center" }}>
        {tendencie.data
          .filter(film => {
            const { title } = film;
            const lowerTitle = title.toLowerCase();
            const lowerFilter = filter.toLowerCase();
            return lowerTitle.includes(lowerFilter);
          })
          .map((film, key) => {
            const { image, title, _id } = film;
            return (
              <FilmsSlide key={key} image={image} title={title} id={_id} />
            );
          })}
      </Slider>
      <TitleCategories
        categorie="Originales de Courflix"
        href="/home/originals"
      />
      <Slider {...settings} style={{ textAlign: "center" }}>
        {original.data.map((film, key) => {
          const { image, title } = film;
          return <BigSlides key={key} image={image} title={title} />;
        })}
      </Slider>
    </div>
  );
}

export default Carousels;
