import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";
import Link from "next/link";

export default function TentangKamiJumbotron({ ...props }) {
  return (
    <Flex minH={{ base: "60vh", md: "80vh", lg: "88vh" }} w="100%" direction="column" alignItems="center" justifyContent="center" bgImg="url('/assets/img/FotoTentangKami.png')" bgRepeat="no-repeat" bgSize="cover" {...props}>
      <Image src="assets/img/LogoPanjangSlogan.png" width={{ base: "90vw", md: "60vw", lg: "50vw" }} marginTop="auto" />
      <Link href="#desc">
        <ArrowDownIcon color="brand.tertiary" w={8} h={8} marginTop="auto" marginBottom="2rem" />
      </Link>
    </Flex>
  );
}
