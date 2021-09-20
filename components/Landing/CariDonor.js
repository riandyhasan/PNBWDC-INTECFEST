import React, { useState } from "react";
import { Box, Flex, Heading, Grid } from "@chakra-ui/react";
import Map from "../Map/Map";
import PlasmaCard from "../PlasmaCard/PlasmaCard";

export default function CariDonor({ onModalOpen, setModalWidth, setModalTitle, setModalContent, ...props }) {
  return (
    <Flex id="caridonor" padding={{ base: "0rem 32rem 0rem 32rem", sm: "0rem 16rem 0rem 16rem", md: "0rem 4rem 0rem 4rem" }} direction="column" {...props}>
      <Heading color="brand.primary" marginLeft={{ base: "3rem", sm: "0rem" }} fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }} marginBottom="3rem">
        Donor Plasma di Dekatmu!
      </Heading>
      <Flex flexDir={{ base: "column", lg: "row" }} alignItems={{ base: "center", lg: "flex-start" }} justifyContent={{ base: "center", lg: "space-around" }} gridGap={16}>
        <Box padding="4rem" bg="brand.primary" borderRadius="13px" position={{ base: "relative", lg: "sticky" }} top="0">
          <Map />
        </Box>
        <Grid templateColumns="repeat(1, 1fr)" gap={6}>
          <PlasmaCard onModalOpen={onModalOpen} setModalTitle={setModalTitle} setModalContent={setModalContent} setModalWidth={setModalWidth} />
          <PlasmaCard onModalOpen={onModalOpen} setModalTitle={setModalTitle} setModalContent={setModalContent} setModalWidth={setModalWidth} />
          <PlasmaCard onModalOpen={onModalOpen} setModalTitle={setModalTitle} setModalContent={setModalContent} setModalWidth={setModalWidth} />
          <PlasmaCard onModalOpen={onModalOpen} setModalTitle={setModalTitle} setModalContent={setModalContent} setModalWidth={setModalWidth} />
          <PlasmaCard onModalOpen={onModalOpen} setModalTitle={setModalTitle} setModalContent={setModalContent} setModalWidth={setModalWidth} />
          <PlasmaCard onModalOpen={onModalOpen} setModalTitle={setModalTitle} setModalContent={setModalContent} setModalWidth={setModalWidth} />
          <PlasmaCard onModalOpen={onModalOpen} setModalTitle={setModalTitle} setModalContent={setModalContent} setModalWidth={setModalWidth} />
          <PlasmaCard />
        </Grid>
      </Flex>
    </Flex>
  );
}
