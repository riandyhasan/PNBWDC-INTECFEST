import React, { useState } from "react";
import { Box, Flex, Heading, Button, Image } from "@chakra-ui/react";
import Link from "next/link";

export default function LandingJumbotron({ ...props }) {
  const [isHoverSearch, setIsHoverSearch] = useState(false);

  return (
    <Flex alignItems="center" maxH="100vh" bg="linear-gradient(259.32deg, rgba(187, 55, 26, 0.21) 7.22%, rgba(255, 248, 217, 0.53) 99.6%)" justifyContent="space-between" padding="1rem 0rem 5rem 4rem" w="100vw" {...props}>
      <Flex direction="column" gridGap={4} maxW="400px">
        <Image src="assets/img/LogoPanjang.png" width="400px" />
        <Heading color="brand.secondary">Bantu Temukan Donor Plasma di Sekitarmu!</Heading>
        <Box marginTop="1rem">
          <Link href="#caridonor">
            <Button
              fontSize="1.5rem"
              padding="1.8rem 1rem 1.8rem 1rem"
              bg="brand.primary"
              color="brand.tertiary"
              _hover={{
                color: "brand.primary",
                bg: "brand.tertiary",
              }}
              onMouseEnter={() => setIsHoverSearch(true)}
              onMouseLeave={() => setIsHoverSearch(false)}
            >
              Cari Plasma
              {isHoverSearch ? <Image src="assets/svg/ui-search-red.svg" width="1.2em" marginLeft="0.4rem" /> : <Image src="assets/svg/ui-search.svg" width="1.2em" marginLeft="0.4rem" />}
            </Button>
          </Link>
        </Box>
      </Flex>
      <Box>
        <Image src="assets/img/FotoLanding.png" boxSize="530px" />
      </Box>
    </Flex>
  );
}
