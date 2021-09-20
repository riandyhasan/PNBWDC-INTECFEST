import React from "react";
import { Flex, Box, Table, Heading, Text, Thead, Tbody, Grid, Tr, Th, Td, TableCaption } from "@chakra-ui/react";

const goldar = [
  {
    gol: "A+",
    count: "2",
  },
  {
    gol: "A-",
    count: "1",
  },
  {
    gol: "B+",
    count: "5",
  },
  {
    gol: "B+",
    count: "3",
  },
  {
    gol: "O+",
    count: "8",
  },
  {
    gol: "O-",
    count: "4",
  },
  {
    gol: "AB+",
    count: "0",
  },

  {
    gol: "AB-",
    count: "1",
  },
];

export default function PlasmaDetails({ ...props }) {
  return (
    <Flex direction="column" padding="0rem 3rem 0rem 3rem" gridGap={6} {...props}>
      <Flex justifyContent="center" alignItems="center" gridGap={6}>
        <Flex justifyContent="center" alignItems="flex-start" direction="column" gridGap={6}>
          <Grid templateColumns="repeat(2, 1fr)" gridGap={12}>
            <Box maxW="200px">
              <Heading color="brand.primary" fontSize="2xl">
                Lokasi
              </Heading>
              <Text>Jl. Sultan Adam Kompleks H. Iyus Blok C No 22 RW 23</Text>
            </Box>
            <Box>
              <Heading color="brand.primary" fontSize="2xl">
                Kontak
              </Heading>
              <Text>087837727431</Text>
            </Box>
            <Box>
              <Heading color="brand.primary" fontSize="2xl">
                Fasilitas Kesehatan
              </Heading>
              <Text>Terverifikasi</Text>
            </Box>
            <Box>
              <Heading color="brand.primary" fontSize="2xl">
                Terakhir diupdate
              </Heading>
              <Text>29 September 2021</Text>
            </Box>
          </Grid>
        </Flex>
        <Flex justifyContent="center" alignItems="center">
          <iframe width="400px" height="200px" src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyD-tljClbOsofB_IM_1mzaLStiW0PL_9X8&q=37.7577,-122.4376`}></iframe>
        </Flex>
      </Flex>
      <Box>
        <Table variant="striped" colorScheme="red">
          <TableCaption>Golongan Darah yang Tersedia</TableCaption>
          <Thead>
            <Tr>
              <Th>Golongan Darah</Th>
              <Th isNumeric>Jumlah</Th>
            </Tr>
          </Thead>
          <Tbody>
            {goldar.map((item) => (
              <Tr>
                <Td>{item.gol}</Td>
                <Td isNumeric>{item.count}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Flex>
  );
}
