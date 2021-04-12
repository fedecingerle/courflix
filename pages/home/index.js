import Head from "next/head";
import Navbar from "../../components/Navbar";

function Home() {
  return (
    <>
      <Head>
        <title>Courflix</title>
        <link rel="shortcut icon" href="../icon.png" />
      </Head>
      <Navbar />
    </>
  );
}

export default Home;
