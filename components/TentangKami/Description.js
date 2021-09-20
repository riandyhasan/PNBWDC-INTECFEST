import React from "react";
import { Flex, Image, Box, Heading, Text } from "@chakra-ui/react";

export default function Description({ ...props }) {
  return (
    <Flex w="100%" padding={{ base: "0rem 1rem 0rem 1rem", sm: "0rem 6rem 0rem 6rem", lg: "0rem 8rem 0rem 6rem" }} alignItems="center" justifyContent="center" direction={{ base: "column", md: "row" }} {...props} gridGap={20}>
      <Image src="assets/img/LogoPlasmaKu.png" width="200px" />
      <Box marginLeft={{ base: "2rem", sm: "0rem" }}>
        <Heading color="brand.primary" fontSize="5xl">
          Apa itu <span style={{ color: "#EBA83A" }}>Plasma</span>Ku?
        </Heading>
        <Text textAlign="justify" marginTop="1rem" fontSize="lg">
          PlasmaKu adalah website yang berisikan informasi donor plasma di sekitar Anda. Selain itu, Anda juga dapat membantu dengan menjadi pendonor untuk orang di sekitar daerah Anda agar mendapatkan plasma konvalesen.
        </Text>
      </Box>
    </Flex>
  );
}
