import React, { useState } from "react";
import { Box, Flex, Heading, Grid, GridItem } from "@chakra-ui/react";
import Map from "../Map/Map";
import PlasmaCard from "../PlasmaCard/PlasmaCard";

export default function CariDonor({ ...props }) {
  return (
    <Flex id="caridonor" padding="0rem 4rem 0rem 4rem" direction="column" {...props}>
      <Heading color="brand.primary" fontSize="5xl" marginBottom="3rem">
        Donor Plasma di Dekatmu!
      </Heading>
      <Flex alignItems="flex-start" justifyContent="space-around" gridGap={16}>
        <Box padding="4rem" bg="brand.primary" borderRadius="13px" sx={{ position: "-webkit-sticky", /* Safari */ position: "sticky", top: "0" }}>
          <Map />
        </Box>
        <Grid templateColumns="repeat(1, 1fr)" gap={6}>
          <PlasmaCard />
          <PlasmaCard />
          <PlasmaCard />
          <PlasmaCard />
          <PlasmaCard />
          <PlasmaCard />
          <PlasmaCard />
          <PlasmaCard />
        </Grid>
      </Flex>
    </Flex>
  );
}
