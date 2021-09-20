import React from "react";
import { Box, Flex, Heading, Button, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function BantuDonor({ ...props }) {
  return (
    <Flex
      bg="brand.primary"
      color="brand.tertiary"
      direction={{ base: "column", md: "row" }}
      padding={{ base: "4rem 16rem 4rem 34rem", sm: "4rem 10rem 4rem 18rem", lg: "4rem" }}
      alignItems={{ base: "flex-start", md: "center" }}
      justifyContent={{ base: "flex-start", md: "space-between" }}
      {...props}
    >
      <Box>
        <Heading maxW="70vw">Bantu Pasien Covid Mendapatkan Donor Plasma!</Heading>
        <Flex textAlign="justify" maxW="70vw">
          <Text marginTop={3}>Mari kita bantu orang-orang di dekatmu yang sedang terkena COVID-19 untuk sembuh dengan mendonorkan plasma konvalesen! </Text>
        </Flex>
      </Box>
      <Box>
        <Link href="/donor">
          <Button
            marginTop={{ base: "3rem", md: "0rem" }}
            fontSize="1.3rem"
            padding="1.5rem"
            bg="brand.tertiary"
            color="brand.primary"
            _hover={{
              bg: "brand.secondary",
            }}
          >
            Donor
            <Image src="assets/svg/blood-drop.svg" width="1.2em" marginLeft="0.4rem" />
          </Button>
        </Link>
      </Box>
    </Flex>
  );
}
