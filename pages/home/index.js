import Head from "next/head";
import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";
import Texts from "../../components/Texts";
import Carousels from "../../components/Carousels";

function Home({ tendencie, original, popular, drama }) {
  return (
    <>
      <Head>
        <title>Courflix</title>
        <link rel="shortcut icon" href="../icon.png" />
      </Head>
      <Navbar />
      <Banner image="https://occ-0-2290-185.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABV-rCYNzkgERMeGM835iSREfkxH0B41imaPjykfBrwuZ0RwdrXM5yO5MFUrXLRPymvrOvw28KtW7XL4hOZN6TbuZxjgZ.webp?r=b26" />
      <Texts
        className="banner"
        image="https://occ-0-2290-185.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABQisxXlJxoZPs1y6VVEQuTx7iwXMUDRp1NcS7LQRkxi86BOEyQ1wU_blu3ikPUg9X1TlGTaNNgMZZERkDa6Y2qb-m0sIGuW-6WI.webp?r=b17"
        subtitle="Son hackers talentosos y no quieren quebrantar la ley. Ellos quieren dejar su huella, pero hacerlo tendrá consecuencias"
      />
      <Carousels tendencie={tendencie} original={original} />
    </>
  );
}

export async function getServerSideProps() {
  const dataTendencie = await fetch(`http://localhost:3000/api/tendencie`);
  const jsonTendencie = await dataTendencie.json();

  const dataOriginal = await fetch(`http://localhost:3000/api/original`);
  const jsonOriginal = await dataOriginal.json();

  // const dataPopular = await fetch(`http://localhost:3000/api/popular`);
  // const jsonPopular = await dataPopular.json();

  // const dataDrama = await fetch(`http://localhost:3000/api/drama`);
  // const jsonDrama = await dataDrama.json();

  return {
    props: {
      tendencie: jsonTendencie,
      original: jsonOriginal
      // popular: jsonPopular,
      // drama: jsonDrama
    }
  };
}

export default Home;
