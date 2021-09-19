import React from "react";
import { Box, Flex, Heading, Button, Image, Text } from "@chakra-ui/react";

export default function BantuDonor({ ...props }) {
  return (
    <Flex bg="brand.primary" color="brand.tertiary" direction={{ base: "column", md: "row" }} padding="4rem" alignItems={{ base: "flex-start", md: "center" }} justifyContent={{ base: "flex-start", md: "space-between" }} {...props}>
      <Box>
        <Heading>Tertarik Berkontribusi Melalui PlasmaHub?</Heading>
        <Flex maxW="70vw">
          <Text textAlign="justify" marginTop={3}>
            Anda ingin berkontribusi lebih di tengah pandemi? Ayo bergabung bersama tim PlasmaHub dan bantu lebih banyak orang dalam menghadapi COVID-19!
          </Text>
        </Flex>
      </Box>
      <Box>
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
          Daftar
          <Image src="assets/svg/stamped.svg" width="1.2em" marginLeft="0.4rem" />
        </Button>
      </Box>
    </Flex>
  );
}
