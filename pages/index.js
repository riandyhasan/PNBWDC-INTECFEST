import Head from "next/head";
import Layout from "../components/Layout/Layout";
import LandingJumbotron from "../components/Landing/Jumbotron";
import BantuDonor from "../components/Landing/BantuDonor";

export default function Landing() {
  return (
    <Layout>
      <Head>
        <title>PlasmaHub</title>
      </Head>

      <main>
        <LandingJumbotron />
        <BantuDonor marginBottom="5rem" />
      </main>
    </Layout>
  );
}
