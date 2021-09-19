import React from "react";
import { Box, Flex, Heading, Button, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import copy from "copy-to-clipboard";

export default function DonorCard({ ...props }) {
  return (
    <Box bg="brand.primary" display="flex" color="brand.tertiary" padding="2rem" justifyContent="space-between" {...props} maxW="500px" borderRadius="22px">
      <Box>
        <Heading cursor="pointer" fontSize="xl">
          Donor Banjarmasin
        </Heading>
        <Flex marginTop="1rem" alignItems="center" gridGap={4}>
          <a href="https://github.com/" target="_blank">
            <Image src="assets/svg/pin.svg" cursor="pointer" width="0.8em" marginLeft="0.4rem" />
          </a>
          <Text
            cursor="pointer"
            onClick={() => {
              copy("Jl. Mana ya gatau gue");
              alert(`Nomor telah berhasil dicopy!`);
            }}
          >
            Jl. Mana ya gatau gue
          </Text>
        </Flex>
        <Flex marginTop="1rem" alignItems="center" gridGap={4}>
          <a href="https://github.com/" target="_blank">
            <Image src="assets/svg/phone.svg" cursor="pointer" width="0.8em" marginLeft="0.4rem" />
          </a>
          <Text
            cursor="pointer"
            onClick={() => {
              copy("Jl. Mana ya gatau gue");
              alert(`Nomor telah berhasil dicopy!`);
            }}
          >
            087837727431
          </Text>
        </Flex>
      </Box>
      <Flex direction="column" justifyContent="space-between" alignItems="flex-end" gridGap={16}>
        <Flex alignItems="center">
          <Heading>33</Heading>
          <Image src="assets/svg/plasma-bag.svg" width="1.8em" marginLeft="0.4rem" />
        </Flex>
        <Link href="/donor">
          <Button
            fontSize="1rem"
            padding="1rem 1.3rem 1rem 1.3rem"
            bg="brand.tertiary"
            color="brand.primary"
            _hover={{
              bg: "brand.secondary",
            }}
          >
            Lihat di Peta
            <Image src="assets/svg/search-map.svg" width="0.8" marginLeft="0.4rem" />
          </Button>
        </Link>
      </Flex>
    </Box>
  );
}
