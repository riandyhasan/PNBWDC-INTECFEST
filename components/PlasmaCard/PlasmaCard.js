import React from "react";
import { Box, Flex, Heading, Button, Image, Text, useToast } from "@chakra-ui/react";
import Link from "next/link";
import copy from "copy-to-clipboard";
import PlasmaDetails from "../PlasmaDetails/PlasmaDetails";

export default function DonorCard({ onModalOpen, setModalWidth, setModalTitle, setModalContent, ...props }) {
  const alamat = useToast();
  const telp = useToast();

  return (
    <Box bg="brand.primary" display="flex" color="brand.tertiary" padding="2rem" justifyContent="space-between" {...props} maxW="500px" borderRadius="22px">
      <Box>
        <Heading
          cursor="pointer"
          fontSize="xl"
          onClick={() => {
            setModalTitle("Donor Banjarmasin");
            setModalContent(<PlasmaDetails />);
            setModalWidth("50vw");
            onModalOpen();
          }}
        >
          Donor Banjarmasin
        </Heading>
        <Flex marginTop="1rem" alignItems="center" gridGap={4}>
          <a
            href="https://www.google.com/maps/place/Jl.+Bali,+Antasan+Besar,+Kec.+Banjarmasin+Tengah,+Kota+Banjarmasin,+Kalimantan+Selatan/data=!4m2!3m1!1s0x2de423c7123bcfb9:0x2ab95b256b2b9d99?sa=X&ved=2ahUKEwjo4bin2o3zAhXJH7cAHXZwDQgQ8gF6BAgPEAE"
            target="_blank"
          >
            <Image src="assets/svg/pin.svg" cursor="pointer" width="0.8em" marginLeft="0.4rem" />
          </a>
          <Text
            cursor="pointer"
            onClick={() => {
              copy("Jl. Bali No 32");
              alamat({
                title: "Alamat berhasil disalin!",
                status: "success",
                duration: 1000,
                isClosable: true,
              });
            }}
          >
            Jl. Bali No 32
          </Text>
        </Flex>
        <Flex marginTop="1rem" alignItems="center" gridGap={4}>
          <a href="https://api.whatsapp.com/send?phone=628783772731" target="_blank">
            <Image src="assets/svg/phone.svg" cursor="pointer" width="0.8em" marginLeft="0.4rem" />
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
      <Flex direction="column" justifyContent="space-between" alignItems="flex-end" gridGap={16}>
        <Flex alignItems="center">
          <Heading>33</Heading>
          <Image src="assets/svg/plasma-bag.svg" width="1.8em" marginLeft="0.4rem" />
        </Flex>
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
      </Flex>
    </Box>
  );
}
