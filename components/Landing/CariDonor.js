import React, { useState } from "react";
import { Box, Flex, Heading, Grid, GridItem } from "@chakra-ui/react";
import Map from "../Map/Map";
import PlasmaCard from "../PlasmaCard/PlasmaCard";

export default function CariDonor({ ...props }) {
  return (
    <Flex id="caridonor" padding="0rem 4rem 0rem 4rem" direction="column" {...props} overflow="visible">
      <Heading color="brand.primary" fontSize="5xl" marginBottom="3rem">
        Donor Plasma di Dekatmu!
      </Heading>
      <Flex alignItems="flex-start" justifyContent="space-around" gridGap={16} position="relative" overflow="visible" float="left" height="auto">
        <Box padding="4rem" bg="brand.primary" borderRadius="13px" sx={{ zIndex: "100", display: "block", alignSelf: "flex-start", position: "-webkit-sticky", /* Safari */ position: "sticky", top: "0" }}>
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
