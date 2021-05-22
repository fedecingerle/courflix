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

function Series({ serie }) {
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

  const { data } = serie;
  return (
    <ToggleEpisodesProvider value={toggleEpisodesContext}>
      {/* <AddProvider value={addItemContext}> */}
      <Navbar handleSearch={serchParam => handleSearch(serchParam)} />
      <TitleCategories className={"commonTitle"} categorie="Series" href="" />
      <div className={styles.container}>
        {data
          .filter(series => {
            const { title } = series;
            const lowerTitle = title.toLowerCase();
            const lowerFilter = searchParam.toLowerCase();
            return lowerTitle.includes(lowerFilter);
          })
          .map((series, key) => {
            const { image, title } = series;
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

export default Series;

// LOCAL http://localhost:3000/api
export async function getStaticProps() {
  const dataSerie = await fetch(
    `https://courflix.fedecingerle.vercel.app/api/serie`
  );
  const jsonSerie = await dataSerie.json();
  return {
    props: {
      serie: jsonSerie
    }
  };
}
