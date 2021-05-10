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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 769,
        settings: {
          arrows: true,
          slidesToShow: 2.5,
          slidesToScroll: 3,
          initialSlide: 2,
          infinite: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          infinite: true,
          slidesToShow: 1.08,
          slidesToScroll: 1
        }
      }
    ]
  };

  const bigSlides = {
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 769,
        settings: {
          arrows: true,
          slidesToShow: 2.5,
          slidesToScroll: 3,
          initialSlide: 2,
          infinite: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          infinite: true,
          slidesToShow: 1.03,
          slidesToScroll: 1
        }
      }
    ]
  };
  // THERE IS A PROBLEM IN THE CARROUSEL LIBRARY THAT DUPLICATES
  // THE MOVIE WHEN FILTERING IT IN THE SEARCH
  // THE FIRTS SOLUTION IS TO CHANGE THE FILTERING LOGIC

  return (
    <div className={styles.carouselContainer}>
      <TitleCategories categorie="Series" href="/home/series" />
      <Slider {...settings} className={styles.slider}>
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

      <TitleCategories categorie="Tendencias" href="/home/series" />
      <Slider
        {...settings}
        className={styles.slider}
        style={{ transform: "none" }}
      >
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
      <TitleCategories categorie="Originales de Courflix" href="/home/series" />
      <Slider {...bigSlides} className={styles.slider}>
        {original.data.map((film, key) => {
          const { image, title } = film;
          return <BigSlides key={key} image={image} title={title} />;
        })}
      </Slider>
      <TitleCategories categorie="Peliculas" href="/home/series" />
      <Slider {...settings} className={styles.slider}>
        {original.data
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
    </div>
  );
}

export default Carousels;
