import Head from "next/head";
import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";
import Texts from "../../components/Texts";
import Carousels from "../../components/Carousels";
import Chapters from "../../components/Chapters";
import { useState } from "react";
import { ToggleEpisodesProvider } from "../../context/ToggleEpisodes";

function Films({ film, tendencie, original }) {
  const { data } = film;
  const { backgroundImage, description, logo, episodes } = data;
  const [toggle, setToggle] = useState(false);
  const [searchParam, setSearchParam] = useState("");

  function handleSearch(searchParam) {
    setSearchParam(searchParam);
  }

  function handleToggle() {
    setToggle(prevState => !prevState);
    console.log(toggle);
  }

  const toggleEpisodesContext = {
    toggle: false,
    handleToggle: handleToggle
  };

  return (
    <ToggleEpisodesProvider value={toggleEpisodesContext}>
      <Navbar handleSearch={serchParam => handleSearch(serchParam)} />
      <Banner image={backgroundImage} />
      {toggle && <Chapters episodes={episodes} data={data} />}
      <Texts className="banner" image={logo} subtitle={description} />
      <Carousels
        filter={searchParam}
        tendencie={tendencie}
        original={original}
      />
    </ToggleEpisodesProvider>
  );
}

export default Films;

export async function getServerSideProps({ params }) {
  const { id } = params;
  const filmsTendencie = await fetch(
    `http://localhost:3000/api/tendencie/${id}`
  );
  const filmsJson = await filmsTendencie.json();

  const dataTendencie = await fetch(`http://localhost:3000/api/tendencie`);
  const jsonTendencie = await dataTendencie.json();

  const dataOriginal = await fetch(`http://localhost:3000/api/original`);
  const jsonOriginal = await dataOriginal.json();
  return {
    props: {
      film: filmsJson,
      tendencie: jsonTendencie,
      original: jsonOriginal
    } // will be passed to the page component as props
  };
}
