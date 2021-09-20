import React from "react";
import { Box, Flex, Heading, Image, Badge, Text, useToast } from "@chakra-ui/react";

export default function DonorCard({ ...props }) {
  const alamat = useToast();
  const telp = useToast();
  return (
    <Flex bg="brand.primary" color="brand.tertiary" padding="2rem" w={{ base: "99vw", sm: "85vw", md: "70vw", lg: "50vw" }} justifyContent="space-between" {...props} borderRadius="32px">
      <Box>
        <Flex direction={{ base: "column", md: "row" }} gridGap={4} alignItems={{ base: "flex-start", md: "center" }}>
          <Heading cursor="pointer" fontSize="3xl">
            Fannan Bactiar
          </Heading>
          <Badge borderRadius="md" colorScheme="red">
            Diperlukan secepatnya
          </Badge>
        </Flex>
        <Flex alignItems="center" gridGap={2} marginTop="1rem">
          <a href="https://www.google.com/maps/place/Ulin+General+Hospital/@-3.3228726,114.6012015,15z/data=!4m2!3m1!1s0x0:0xd0c93abd58eef790?sa=X&ved=2ahUKEwiouoGj343zAhUD8HMBHQZeD-YQ_BJ6BAheEAU" target="_blank">
            <Image src="assets/svg/hospital-pin.svg" cursor="pointer" width="1.8em" />
          </a>
          <Text
            cursor="pointer"
            onClick={() => {
              copy("Jl. A. Yani No.43, Sungai Baru, Kec. Banjarmasin Tengah, Kota Banjarmasin, Kalimantan Selatan 70233");
              alamat({
                title: "Alamat berhasil disalin!",
                status: "success",
                duration: 1000,
                isClosable: true,
              });
            }}
          >
            RS Ulin
          </Text>
        </Flex>
        <Flex alignItems="center" gridGap={2} marginTop="1rem">
          <a href="https://api.whatsapp.com/send?phone=6287837727431" target="_blank">
            <Image src="assets/svg/phone.svg" cursor="pointer" width="1.15em" marginLeft="0.5rem" />
          </a>
          <Text
            cursor="pointer"
            onClick={() => {
              copy("08783772731");
              telp({
                title: "Nomor berhasil disalin!",
                status: "success",
                duration: 1000,
                isClosable: true,
              });
            }}
          >
            087837727431
          </Text>
        </Flex>
      </Box>
      <Image src="assets/svg/a+.svg" width={{ base: "3em", md: "4em" }} />
    </Flex>
  );
}
