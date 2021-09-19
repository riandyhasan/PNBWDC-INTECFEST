import React from "react";
import { Box, Text, Flex, Button, Image, Heading } from "@chakra-ui/react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import Link from "next/link";

const contacts = [
  {
    icon: <MdEmail size="2em" />,
    contact: "admin@plasmahub.id",
    link: "mailto:admin@plasmahub.id",
  },
  {
    icon: <MdPhone size="2em" />,
    contact: "+62812 3456 7890",
    link: "https://api.whatsapp.com/send?phone=6281234567890",
  },
  {
    icon: <MdLocationOn size="2em" />,
    contact: "Jl. Ganesha No. 10 Bandung",
    link: "https://www.google.com/maps/d/u/0/viewer?ie=UTF8&oe=UTF8&msa=0&mid=1lDG4SmFHWTKwVXQR01hGlEwSIKE&ll=-6.892654999999992%2C107.610168&z=17",
  },
];

const informasi = [
  {
    name: "Beranda",
    link: "/",
  },
  {
    name: "Tentang Kami",
    link: "/tentangkami",
  },
  {
    name: "Donor",
    link: "/donor",
  },
];

export default function Footer() {
  return (
    <Flex
      as="footer"
      direction={{ base: "column", lg: "row" }}
      bg="brand.primary"
      minW="100vw"
      p="2rem 2rem 0.5rem 2rem"
      color="brand.tertiary"
      alignItems={{ base: "flex-start", sm: "center", md: "center", lg: "flex-start" }}
      gridGap={{ base: 8, lg: 12, xl: 36 }}
    >
      <Flex direction="column" alignItems={{ base: "flex-start", sm: "center", md: "center", lg: "flex-start" }} justifyContent="space-between" gridGap={{ base: 4, lg: 28 }}>
        <Flex alignItems="center" gridGap={4}>
          <Image src="assets/img/LogoBulatShadow.png" width="65px" />
          <Box>
            <Heading fontSize="2xl">PlasmaHub</Heading>
            <Text fontSize="sm">#BantuCari, BantuDonor.</Text>
          </Box>
        </Flex>
        <Text>&copy; PlasmaHub 2021</Text>
      </Flex>

      <Flex direction="column" gridGap={4}>
        <Heading fontSize="xl">Hubungi Kami</Heading>
        {contacts.map((item) => (
          <a href={item.link} target="_blank">
            <Flex gridGap={2} alignItems="center">
              {item.icon}
              <Text>{item.contact}</Text>
            </Flex>
          </a>
        ))}
      </Flex>

      <Flex direction="column" gridGap={4} marginRight={{ base: "0rem", sm: "8rem", md: "8rem", lg: "0rem" }}>
        <Heading fontSize="xl">Informasi</Heading>
        {informasi.map((item) => (
          <Link href={item.link}>
            <Text cursor="pointer">{item.name}</Text>
          </Link>
        ))}
      </Flex>

      <Box>
        <Heading fontSize="xl">Ingin Berkontibusi?</Heading>
        <Button
          marginTop="1rem"
          bg="brand.tertiary"
          color="brand.primary"
          _hover={{
            bg: "brand.secondary",
          }}
        >
          Gabung PlasmaHub
        </Button>
      </Box>
    </Flex>
  );
}
