import Head from "next/head";
import Layout from "../components/Layout/Layout";
import Jumbotron from "../components/TentangKami/Jumbotron";
import Description from "../components/TentangKami/Description";
import Kontribusi from "../components/TentangKami/Kontribusi";
import JoinUs from "../components/TentangKami/JoinUs";
import Kolaborator from "../components/TentangKami/Kolaborator";

export default function TentangKami() {
  return (
    <Layout>
      <Head>
        <title>PlasmaHub</title>
      </Head>

      <main>
        <Jumbotron mb="5rem" />
        <Description mb="5rem" id="desc" />
        <Kontribusi />
        <JoinUs mb="5rem" />
        <Kolaborator />
      </main>
    </Layout>
  );
}
