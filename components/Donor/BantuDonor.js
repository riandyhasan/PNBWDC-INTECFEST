import React from "react";
import { Flex, Box, Heading, Grid, Image } from "@chakra-ui/react";
import DonorCard from "../DonorCard/DonorCard";
import FilterBox from "./FilterBox";

export default function BantuDonor({ ...props }) {
  return (
    <Flex direction="column" id="bantudonor" alignItems="center" {...props}>
      <Flex direction={{ base: "column", sm: "row" }} bg="brand.primary" color="brand.secondary" w="100%" padding="1rem 3rem 1rem 3rem" marginBottom="3rem" alignItems={{ base: "flex-start", sm: "center" }} justifyContent="space-between">
        <Flex alignItems="center" gridGap={4}>
          <Image src="assets/svg/pin.svg" width={{ base: "0.8em", sm: "1.4em" }} />
          <Heading fontSize={{ base: "lg", sm: "2xl" }}>Banjarmasin</Heading>
        </Flex>
        <Flex direction={{ base: "row-reverse", sm: "row" }} marginTop={{ base: "1rem", sm: "0rem" }} alignItems="center" gridGap={4}>
          <Heading fontSize={{ base: "xl", sm: "4xl" }}>8</Heading>
          <Image src="assets/svg/patient.svg" width={{ base: "1.2em", sm: "2.4em" }} />
        </Flex>
      </Flex>
      <Flex gridGap={12}>
        <Box display={{ base: "none", md: "block" }} alignSelf="flex-start" sx={{ position: "-webkit-sticky", /* Safari */ position: "sticky", top: "10" }}>
          <FilterBox />
        </Box>
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
    </Flex>
  );
}
