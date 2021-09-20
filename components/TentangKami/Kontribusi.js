import React from "react";
import { Flex, Image, Box, Heading, Text, Grid } from "@chakra-ui/react";
import AnimatedNumber from "../AnimatedNumber/AnimatedNumber";

const card = [
  {
    icon: "assets/svg/facial-mask.svg",
    count: <AnimatedNumber value={400} suffix="+" />,
    desc: "Pasien COVID Mendapatkan Donor",
  },
  {
    icon: "assets/svg/plasma.svg",
    count: <AnimatedNumber value={528} />,
    desc: "Data Donor Plasma Terhimpun",
  },
  {
    icon: "assets/svg/blood-drop2.svg",
    count: <AnimatedNumber value={200} suffix="+" />,
    desc: "Pendonor Plasma Melalui PlasmaKu",
  },
];

export default function Kontribusi({ ...props }) {
  return (
    <Flex direction="column" {...props} p="0rem 4rem 0rem 4rem" color="brand.tertiary">
      <Heading color="brand.primary" fontSize="5xl">
        Kontribusi <span style={{ color: "#EBA83A" }}>Plasma</span>Ku
      </Heading>
      <Grid
        marginTop="2rem"
        marginBottom="5rem"
        gridGap="4rem"
        templateColumns={{
          base: "1fr",
          lg: "repeat(auto-fit,minmax(350px,320px))",
        }}
        justifyContent="center"
        alignContent="center"
        alignItems="center"
      >
        {card.map((item) => (
          <Box display="flex" flexDir="column" direction="column" bg="brand.primary" alignItems="center" padding="2rem" borderRadius="xl">
            <Image src={item.icon} />
            <Heading marginTop="1rem">{item.count}</Heading>
            <Text textAlign="center">{item.desc}</Text>
          </Box>
        ))}
      </Grid>
    </Flex>
  );
}
