import React from "react";
import { FormControl, FormLabel, Switch, Flex, Box, Select, Heading, Input } from "@chakra-ui/react";

export default function FilterBox({ ...props }) {
  return (
    <Box padding="2rem" bg="linear-gradient(191.37deg, #BB371A -800.76%, rgba(255, 255, 255, 0.39) 181.15%)" style={{ boxShadow: "0px 2px 1px 3px rgba(0, 0, 0, 0.25)" }} borderRadius="30px" {...props}>
      <Heading mb="2rem" color="brand.primary" textAlign="center" fontSize="2xl">
        Filter
      </Heading>
      <FormControl>
        <Flex direction="column" gridGap={4}>
          <Flex display="flex" alignItems="center" gridGap={4}>
            <Box>
              <Heading mb="0.5rem" color="brand.primary" textAlign="left" fontSize="xl">
                Golongan Darah
              </Heading>
              <Select bg="brand.primary" color="brand.secondary">
                <option>A</option>
                <option>B</option>
                <option>O</option>
                <option>AB</option>
              </Select>
            </Box>
            <Box>
              <Heading mb="0.5rem" color="brand.primary" textAlign="left" fontSize="xl">
                Rhesus
              </Heading>
              <Select bg="brand.primary" color="brand.secondary">
                <option>Positif</option>
                <option>Negatif</option>
              </Select>
            </Box>
          </Flex>
          <Flex display="flex" alignItems="center" gridGap={4}>
            <Box>
              <Heading mb="0.5rem" color="brand.primary" textAlign="left" fontSize="xl">
                Provinsi
              </Heading>
              <Select bg="brand.primary" color="brand.secondary">
                <option>Kalimantan Selatan</option>
              </Select>
            </Box>
            <Box>
              <Heading mb="0.5rem" color="brand.primary" textAlign="left" fontSize="xl">
                Kota
              </Heading>
              <Select bg="brand.primary" color="brand.secondary">
                <option>Banjarmasin</option>
                <option>Banjarbaru</option>
                <option>Balangan</option>
                <option>Banjar</option>
                <option>Barito Kuala</option>
                <option>Hulu Sungai Selatan</option>
                <option>Hulu Sungai Tengah</option>
                <option>Hulu Sungai Utara</option>
                <option>Kotabaru</option>
                <option>Tabalong</option>
                <option>Tanah Bumbu</option>
                <option>Tanah Laut</option>
                <option>Tapin</option>
              </Select>
            </Box>
          </Flex>

          <FormControl display="flex" alignItems="center">
            <FormLabel color="brand.primary">Diperlukan secepatnya?</FormLabel>
            <Switch size="md" colorScheme="red" />
          </FormControl>
        </Flex>
        <Input mt="1.5rem" isRequired={true} type="search" color="brand.secondary" placeholder="Cari pasien..." border="3px solid #BB371A" borderColor="brand.primary" focusBorderColor="brand.secondary" />
      </FormControl>
    </Box>
  );
}
