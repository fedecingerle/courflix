import Head from "next/head";
import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";
function Home() {
  return (
    <>
      <Head>
        <title>Courflix</title>
        <link rel="shortcut icon" href="../icon.png" />
      </Head>
      <Navbar />
      <Banner image="https://occ-0-2290-185.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABV-rCYNzkgERMeGM835iSREfkxH0B41imaPjykfBrwuZ0RwdrXM5yO5MFUrXLRPymvrOvw28KtW7XL4hOZN6TbuZxjgZ.webp?r=b26" />
    </>
  );
}

export default Home;
