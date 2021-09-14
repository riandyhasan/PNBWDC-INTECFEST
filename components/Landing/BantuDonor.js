import React from "react";
import { Box, Flex, Heading, Button, Image, Text } from "@chakra-ui/react";

export default function BantuDonor({ ...props }) {
  return (
    <Flex bg="#BB371A" color="#FFFFFF" padding="4rem" alignItems="center" justifyContent="space-between" {...props}>
      <Box>
        <Heading>Bantu Pasien Covid Mendapatkan Donor Plasma!</Heading>
        <Text marginTop={3}>Mari kita bantu orang-orang di dekatmu yang sedang terkena COVID-19 untuk sembuh dengan mendonorkan plasma konvalesen! </Text>
      </Box>
      <Box>
        <Button
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
      </Box>
    </Flex>
  );
}
