import React, { useEffect } from "react";
import Head from "next/head";
import Layout from "../components/Layout/Layout";
import BantuDonor from "../components/Donor/BantuDonor";
import DonorStep from "../components/Donor/DonorStep";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Donor() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <Layout>
      <Head>
        <title>PlasmaKu | Donor</title>
      </Head>

      <main>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2 }}>
          <DonorStep mt="2rem" mb="5rem" />
        </motion.div>
        <motion.div ref={ref} animate={controls} initial="hidden" transition={{ duration: 1 }} variants={{ hidden: { opacity: 0, y: -30 }, visible: { opacity: 1, y: 0 } }}>
          <BantuDonor mb="5rem" />
        </motion.div>
      </main>
    </Layout>
  );
}
