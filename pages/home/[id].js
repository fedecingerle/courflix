import Head from "next/head";
import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";
import Texts from "../../components/Texts";
import Carousels from "../../components/Carousels";
import Chapters from "../../components/Chapters";
import { useState } from "react";
import { ToggleEpisodesProvider } from "../../context/ToggleEpisodes";
import Footer from "../../components/Footer";

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
  }

  const toggleEpisodesContext = {
    toggle: false,
    handleToggle: handleToggle
  };

  return (
    <ToggleEpisodesProvider value={toggleEpisodesContext}>
      <Navbar handleSearch={serchParam => handleSearch(serchParam)} />
      <Banner image={backgroundImage} />
      {toggle && <Chapters data={data} />}
      <Texts className="banner" image={logo} subtitle={description} />
      <Carousels
        filter={searchParam}
        tendencie={tendencie}
        original={original}
      />
      <Footer />
    </ToggleEpisodesProvider>
  );
}

export default Films;

export async function getServerSideProps({ params }) {
  const { id } = params;

  // PROD https://courflix.fedecingerle.vercel.app/api/tendencie/${id}
  // LOCAL http://localhost:3000/api/tendencie/${id}

  const filmsTendencie = await fetch(
    `http://localhost:3000/api/tendencie/${id}`
  );
  const filmsJson = await filmsTendencie.json();

  // LOCAL http://localhost:3000/api/tendencie

  const dataTendencie = await fetch(`http://localhost:3000/api/tendencie`);
  const jsonTendencie = await dataTendencie.json();

  // LOCAL http://localhost:3000/api/original

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
