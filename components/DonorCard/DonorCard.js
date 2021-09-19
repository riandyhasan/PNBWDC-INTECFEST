import React from "react";
import { Box, Flex, Heading, Image, Badge, Text } from "@chakra-ui/react";

export default function DonorCard({ ...props }) {
  return (
    <Flex bg="brand.primary" color="brand.tertiary" padding="2rem" w="80vw" justifyContent="space-between" {...props} borderRadius="32px">
      <Box>
        <Flex gridGap={4} alignItems="center">
          <Heading cursor="pointer" fontSize="3xl">
            Fannan Bactiar
          </Heading>
          <Badge borderRadius="md" colorScheme="red">
            Diperlukan secepatnya
          </Badge>
        </Flex>
        <Flex alignItems="center" gridGap={2} marginTop="1rem">
          <Image src="assets/svg/hospital-pin.svg" width="1.8em" />
          <Text>RS Ulin</Text>
        </Flex>
        <Flex alignItems="center" gridGap={2} marginTop="1rem">
          <Image src="assets/svg/phone.svg" width="1.15em" marginLeft="0.5rem" />
          <Text>087837727431</Text>
        </Flex>
      </Box>
      <Image src="assets/svg/a+.svg" width="4em" />
    </Flex>
  );
}
