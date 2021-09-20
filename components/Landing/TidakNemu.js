import React, { useState } from "react";
import { Box, Flex, Heading, Text, Button, Image } from "@chakra-ui/react";
import Link from "next/link";

const step = [
  {
    number: "1",
    step: "Isi Data",
    desc: "Ajukan permohonan untuk mendapatkan plasma konvalesen dengan mengisi data diri pasien terlebih dahulu.",
  },
  {
    number: "2",
    step: "Tunggu Konfirmasi",
    desc: "Setelah Anda mengisi data diri pasien yang mengajukan permohonan jika data diri telah dikonfirmasi dan lengkap maka akan diberitahukan konfirmasi melalui email.",
  },
  {
    number: "3",
    step: "Tunggu Pendonor",
    desc: "Setelah dilakukan konfirmasi permohonan Anda akan muncul pada halaman donor dan tunggu hingga ada pendonor yang ingin melakukan donor.",
  },
];
export default function TidakNemu({ ...props }) {
  const [isHoverSearch, setIsHoverSearch] = useState(false);
  return (
    <Flex direction="column" padding="0rem 4rem 0rem 4rem" {...props}>
      <Heading fontSize={{ base: "3xl", sm: "5xl" }} textAlign={{ base: "center", sm: "left" }} color="brand.primary" maxW="80vw" marginLeft={{ base: "31rem", sm: "14rem", md: "0rem", lg: "0rem" }}>
        Tidak Menemukan Donor yang Tepat?
      </Heading>
      <Flex direction={{ base: "column", md: "row" }} alignItems={{ base: "center", sm: "flex-start" }} marginLeft={{ sm: "18rem", md: "0rem", lg: "0rem" }} justify-content="center" gridGap={16} marginTop="5rem">
        {step.map((item) => (
          <Flex direction="column" alignItems={{ base: "center", sm: "flex-start" }} gridGap={4}>
            <Box display="flex" flexDir="column" bg="brand.primary" borderRadius="100px" width="120px" height="120px" justifyContent="center">
              <Heading textAlign="center" color="brand.tertiary">
                {item.number}
              </Heading>
            </Box>
            <Heading color="brand.secondary">{item.step}</Heading>
            <Text textAlign="justify" maxW={{ base: "250px", sm: "350px" }}>
              {item.desc}
            </Text>
            {item.number == "1" ? (
              <Box>
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
                  Ajukan Permohonan
                  {isHoverSearch ? <Image src="assets/svg/register-red.svg" width="1.2em" marginLeft="0.4rem" /> : <Image src="assets/svg/register.svg" width="1.2em" marginLeft="0.4rem" />}
                </Button>
              </Box>
            ) : null}
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
