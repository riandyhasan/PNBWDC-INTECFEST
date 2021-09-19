import React, { useState } from "react";
import { Box, Text, Flex, Stack, Button, Image } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import Link from "next/link";
import { useRouter } from "next/router";

const route = [
  {
    name: "Beranda",
    path: "/",
  },
  {
    name: "Tentang Kami",
    path: "/tentangkami",
  },
  {
    name: "Donor",
    path: "/donor",
  },
];

export default function Navbar({ ...props }) {
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Flex as="nav" align="center" alingItems="center" justify="space-between" wrap="wrap" w="100%" p="0.1em" paddingLeft={["0em", "0em", "2em"]} paddingRight={["0em", "0em", "2em"]} {...props}>
      <Box cursor="pointer" maxW="25vw" marginTop="1.3em" marginBottom="1.3em">
        <Link href="/">
          <Image src="/assets/img/LogoPanjang.png" width="143px" />
        </Link>
      </Box>
      <Box display={{ base: "block", md: "none" }} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <GrClose size={24} /> : <GiHamburgerMenu size={24} />}
      </Box>
      <Box display={{ base: menuOpen ? "block" : "none", md: "block" }} flexBasis={{ base: "100%", md: "auto" }}>
        <Stack mt={{ base: menuOpen ? "1em" : "0", md: "0" }} spacing={6} align="center" justify={["center", "space-between", "flex-end", "flex-end"]} direction={["column", "row", "row", "row"]}>
          {route.map((link) => (
            <Box key={link.name + "-nav"}>
              <Link href={link.path} key={link.name + "-nav"}>
                <Text
                  fontSize="1em"
                  fontWeight={500}
                  cursor="pointer"
                  textAlign="center"
                  color={router.asPath == link.path ? "brand.primary" : ""}
                  marginTop={router.asPath == link.path ? "3px" : ""}
                  borderBottom={router.asPath == link.path ? "3px solid #BB371A" : ""}
                  _hover={{
                    color: "brand.primary",
                  }}
                >
                  {link.name}
                </Text>
              </Link>
            </Box>
          ))}
          <Link href="/#bantudonor">
            <Button
              fontSize="1em"
              fontWeight={600}
              bg="brand.primary"
              color="brand.tertiary"
              _hover={{
                color: "brand.primary",
                bg: "brand.tertiary",
              }}
            >
              Cari Plasma
            </Button>
          </Link>
        </Stack>
      </Box>
    </Flex>
  );
}
