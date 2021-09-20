import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TentangKamiJumbotron({ ...props }) {
  return (
    <Flex minH={{ base: "60vh", md: "80vh", lg: "88vh" }} w="100%" direction="column" alignItems="center" justifyContent="center" bgImg="url('/assets/img/FotoTentangKami.png')" bgRepeat="no-repeat" bgSize="cover" {...props}>
      <Image src="assets/img/LogoPanjangSlogan.png" width={{ base: "90vw", md: "60vw", lg: "50vw" }} />
      <Link href="#desc">
        <motion.div animate={{ y: [150, 165, 150] }} transition={{ type: "spring", stiffness: 100, ease: "linear", duration: 1, repeat: Infinity }}>
          <ArrowDownIcon cursor="pointer" color="brand.tertiary" w={8} h={8} marginBottom="2rem" marginTop="auto" />
        </motion.div>
      </Link>
    </Flex>
  );
}
