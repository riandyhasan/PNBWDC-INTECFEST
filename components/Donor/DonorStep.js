import React, { useState } from "react";
import { Box, Flex, Heading, Text, Button, Image } from "@chakra-ui/react";
import Link from "next/link";

const step = [
  {
    number: "1",
    step: "Cari Pasien",
    desc: "Cari pasien pada halaman donor dan pastikan golongan darahmu cocok dengan golongan darah pasien.",
  },
  {
    number: "2",
    step: "Hubungi",
    desc: "Jika telah mendapatkan pasien yang cocok Anda bisa langsung menghubungi kontak yang tertera untuk melakukan donor.",
  },
  {
    number: "3",
    step: "Donor",
    desc: "Setelah menghubungi kontak yang tertera pendonor bisa langsung mendonorkan plasma ke tempat pasien di rawat.",
  },
];
export default function DonorStep({ ...props }) {
  const [isHoverSearch, setIsHoverSearch] = useState(false);
  return (
    <Flex direction="column" padding="0rem 4rem 0rem 4rem" {...props}>
      <Heading fontSize={{ base: "4xl", sm: "5xl" }} color="brand.primary">
        Ingin Donor Plasma?
      </Heading>
      <Flex direction={{ base: "column", sm: "row" }} alignItems={{ base: "center", sm: "flex-start" }} justify-content="center" gridGap={16} marginTop="5rem">
        {step.map((item) => (
          <Flex direction="column" alignItems={{ base: "center", sm: "flex-start" }} gridGap={4}>
            <Box display="flex" flexDir="column" bg="brand.primary" borderRadius="100px" width="120px" height="120px" justifyContent="center">
              <Heading textAlign="center" color="brand.tertiary">
                {item.number}
              </Heading>
            </Box>
            <Heading color="brand.secondary">{item.step}</Heading>
            <Text textAlign="justify" maxW="350px">
              {item.desc}
            </Text>
            {item.number == "1" ? (
              <Box>
                <Link href="#bantudonor">
                  <Button
                    fontSize="1.2rem"
                    padding="1rem 1.2rem 1rem 1.2rem"
                    bg="brand.primary"
                    color="brand.tertiary"
                    _hover={{
                      color: "brand.primary",
                      bg: "brand.tertiary",
                    }}
                    onMouseEnter={() => setIsHoverSearch(true)}
                    onMouseLeave={() => setIsHoverSearch(false)}
                  >
                    Cari Pasien
                    {isHoverSearch ? <Image src="assets/svg/ui-search-red.svg" width="1.2em" marginLeft="0.4rem" /> : <Image src="assets/svg/ui-search.svg" width="1.2em" marginLeft="0.4rem" />}
                  </Button>
                </Link>
              </Box>
            ) : null}
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
