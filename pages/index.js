import React, { useState, useEffect } from "react";
import { useDisclosure } from "@chakra-ui/react";
import Head from "next/head";
import Layout from "../components/Layout/Layout";
import Modal from "../components/Modal/Modal";
import LandingJumbotron from "../components/Landing/Jumbotron";
import BantuDonor from "../components/Landing/BantuDonor";
import CariDonor from "../components/Landing/CariDonor";
import TidakNemu from "../components/Landing/TidakNemu";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Landing() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const { isOpen: isModalOpen, onOpen: onModalOpen, onClose: onModalClose } = useDisclosure();

  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");
  const [modalWidth, setModalWidth] = useState("");

  return (
    <Layout>
      <Head>
        <title>PlasmaKu</title>
      </Head>

      <main>
        <Modal isOpen={isModalOpen} onClose={onModalClose} title={modalTitle} content={modalContent} width={modalWidth} />
        <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2 }}>
          <LandingJumbotron />
        </motion.div>
        <BantuDonor marginBottom="5rem" />
        <motion.div ref={ref} animate={controls} initial="hidden" transition={{ duration: 1 }} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
          <CariDonor mb="5rem" onModalOpen={onModalOpen} setModalTitle={setModalTitle} setModalContent={setModalContent} setModalWidth={setModalWidth} />
        </motion.div>
        <TidakNemu mb="5rem" />
      </main>
    </Layout>
  );
}
