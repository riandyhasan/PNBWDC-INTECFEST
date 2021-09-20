import React, { useEffect } from "react";
import Head from "next/head";
import Layout from "../components/Layout/Layout";
import Jumbotron from "../components/TentangKami/Jumbotron";
import Description from "../components/TentangKami/Description";
import Kontribusi from "../components/TentangKami/Kontribusi";
import JoinUs from "../components/TentangKami/JoinUs";
import Kolaborator from "../components/TentangKami/Kolaborator";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function TentangKami() {
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
        <title>PlasmaKu | Tentang Kami</title>
      </Head>

      <main>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
          <Jumbotron mb="5rem" />
        </motion.div>
        <motion.div ref={ref} animate={controls} initial="hidden" transition={{ duration: 1 }} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
          <Description mb="5rem" id="desc" />
        </motion.div>
        <Kontribusi />
        <JoinUs mb="5rem" />
        <Kolaborator />
      </main>
    </Layout>
  );
}
