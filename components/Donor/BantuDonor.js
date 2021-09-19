import React from "react";
import { Flex, Heading, Grid, Image } from "@chakra-ui/react";
import DonorCard from "../DonorCard/DonorCard";

export default function BantuDonor({ ...props }) {
  return (
    <Flex direction="column" id="bantudonor" alignItems="center" {...props}>
      <Flex bg="brand.primary" color="brand.secondary" minW="100vw" padding="1rem 3rem 1rem 3rem" marginBottom="3rem" alignItems="center" justifyContent="space-between">
        <Flex alignItems="center" gridGap={4}>
          <Image src="assets/svg/pin.svg" width="1.4em" />
          <Heading fontSize="2xl">Banjarmasin</Heading>
        </Flex>
        <Flex alignItems="center" gridGap={4}>
          <Heading>10</Heading>
          <Image src="assets/svg/patient.svg" width="2.4em" />
        </Flex>
      </Flex>
      <Grid templateColumns="repeat(1, 1fr)" gap={6}>
        <DonorCard />
        <DonorCard />
        <DonorCard />
        <DonorCard />
        <DonorCard />
        <DonorCard />
        <DonorCard />
        <DonorCard />
      </Grid>
    </Flex>
  );
}
