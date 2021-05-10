import { useContext } from "react";
import styles from "./style.module.scss";
import Button from "../Button";
import React from "react";
import ToggleEpisodesContext from "../../context/ToggleEpisodes";
import DropDown from "../DropDown";

function Chapters(props) {
  const { data } = props;
  const { backgroundImage, description, logo, episodes } = data;
  const { handleToggle } = useContext(ToggleEpisodesContext);

  return (
    <React.Fragment>
      <div className={styles.opacityContainer}></div>
      <div className={styles.filmContainer}>
        <div className={styles.backContainer}>
          <div
            className={styles.background}
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className={styles.buttonContainer}>
            <Button
              icon="fas fa-times"
              className="close"
              onClick={handleToggle}
            />
          </div>
          <div className={styles.dataContainer}>
            <img src={logo} />
            <div style={{ width: "150px" }}>
              <Button
                text="Reproducir"
                icon="fa fa-play"
                className="play"
                iconClass="iconPlay"
              />
            </div>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.infoContainer}>
            <div className={styles.description}>{description}</div>
            <div className={styles.filmSpecs}></div>
          </div>
          <div className={styles.episodeSelector}>
            <div className={styles.episodes}>Episodios</div>
            <DropDown />
          </div>
          {episodes &&
            episodes.map((chapters, key) => {
              return (
                <React.Fragment>
                  <div
                    className={styles.chapterContainer}
                    style={
                      key == 0
                        ? { backgroundColor: "#333", borderRadius: "8px" }
                        : { backgroundColor: "#191919" }
                    }
                  >
                    <div className={styles.imgContainer}>
                      <div className={styles.key}>{key + 1}</div>
                      <img src={chapters.image} />
                      <div className={styles.titleTime}>
                        <div className={styles.title}>{chapters.title}</div>
                        <div className={styles.time}>{chapters.duration}</div>
                      </div>
                      <div className={styles.iconContainer}>
                        <i className="fas fa-play" />
                      </div>
                    </div>
                    <div className={styles.chapter}>
                      <div className={styles.titleTime}>
                        <div className={styles.title}>{chapters.title}</div>
                        <div className={styles.time}>{chapters.duration}</div>
                      </div>
                      <div className={styles.description}>
                        {chapters.description}
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Chapters;
