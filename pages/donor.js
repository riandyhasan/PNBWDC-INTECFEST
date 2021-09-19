import Head from "next/head";
import Layout from "../components/Layout/Layout";
import BantuDonor from "../components/Donor/BantuDonor";
import DonorStep from "../components/Donor/DonorStep";

export default function Donor() {
  return (
    <Layout>
      <Head>
        <title>PlasmaHub</title>
      </Head>

      <main>
        <DonorStep mt="2rem" mb="5rem" />
        <BantuDonor mb="5rem" />
      </main>
    </Layout>
  );
}
