import React from "react";
import { useState } from "react";
import styles from "./style.module.scss";
import Chapters from "../../../components/Chapters";
import Navbar from "../../../components/Navbar";
import TitleCategories from "../../../components/TitleCategories";
import Button from "../../../components/Button";

import { AddProvider } from "../../../context/Add";
import { ToggleEpisodesProvider } from "../../../context/ToggleEpisodes";
import Footer from "../../../components/Footer";

function Films({ film }) {
  const [toggle, setToggle] = useState(false);
  // const [items, setItems] = useState([]);

  const [searchParam, setSearchParam] = useState("");

  function handleSearch(searchParam) {
    setSearchParam(searchParam);
  }
  function handleToggle() {
    setToggle(prevState => !prevState);
  }

  // function addToList(data) {
  //   setItems(prevState => [...prevState]);
  // }
  const toggleEpisodesContext = {
    toggle: false,
    handleToggle: handleToggle
  };

  // const addItemContext = {
  //   items: items,
  //   addToList: addToList
  // };

  const { data } = film;
  return (
    <ToggleEpisodesProvider value={toggleEpisodesContext}>
      {/* <AddProvider value={addItemContext}> */}
      <Navbar handleSearch={serchParam => handleSearch(serchParam)} />
      <TitleCategories className={"commonTitle"} categorie="Series" href="" />
      <div className={styles.container}>
        {data
          .filter(films => {
            const { title } = films;
            const lowerTitle = title.toLowerCase();
            const lowerFilter = searchParam.toLowerCase();
            return lowerTitle.includes(lowerFilter);
          })
          .map((films, key) => {
            const { image, title } = films;
            return (
              <React.Fragment>
                <div className={styles.filmContainer}>
                  <div
                    className={styles.photo}
                    style={{ backgroundImage: `url(${image})` }}
                  />
                  <div className={styles.actions}>
                    <Button
                      iconClass="iconGoPlay"
                      className="goPlay"
                      icon="fa fa-play"
                    />
                    <Button
                      // onClick={() => addToList(series)}
                      text="Add to myList"
                      iconClass="iconGoPlay"
                      className="add"
                      icon="fas fa-check"
                    />
                  </div>
                </div>
              </React.Fragment>
            );
          })}
      </div>
      <Footer />
      {/* </AddProvider> */}
    </ToggleEpisodesProvider>
  );
}

export default Films;

//LOCAL http://localhost:3000/api/film

export async function getStaticProps() {
  const dataFilm = await fetch(
    `https://courflix-fedecingerle.vercel.app/api/film`
  );
  const jsonFilm = await dataFilm.json();
  return {
    props: {
      film: jsonFilm
    }
  };
}
