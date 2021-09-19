import React from "react";
import { Container, Heading, Wrap, WrapItem, Image } from "@chakra-ui/react";

const mediaPartners = [
  {
    img: "wargabantuwarga.png",
    alt: "Warga Bantu Warga",
    url: "https://www.wargabantuwarga.com/",
  },
  {
    img: "laporcovid.png",
    alt: "Lapor Covid-19",
    url: "https://laporcovid19.org/",
  },
  {
    img: "indorelawan.png",
    alt: "Indorelawan.org",
    url: "https://indorelawan.org/",
  },
  {
    img: "kawalcovid.png",
    alt: "Kawal Covid",
    url: "https://kawalcovid19.id/",
  },
  {
    img: "bantucovid.png",
    alt: "Bantu Covid",
    url: "https://twitter.com/BantuCovid",
  },
  {
    img: "narasi.png",
    alt: "Narasi TV",
    url: "https://www.narasi.tv/",
  },
];

export default function Kolaborator({ ...props }) {
  return (
    <Container maxW="80vw" {...props}>
      <Heading color="brand.primary" textAlign="center" fontSize={{ base: "3xl", sm: "5xl" }}>
        Terima Kasih Kepada Para Kolaborator!
      </Heading>
      <Wrap align="center" justify="center" spacing="5rem" padding="4rem">
        {mediaPartners.map((item, index) => (
          <WrapItem>
            <a href={item.url} target="_blank">
              <Image key={`MediaPartner-${index}`} width="180px" cursor="pointer" src={`assets/img/media partners/${item.img}`} alt={item.alt} />
            </a>
          </WrapItem>
        ))}
      </Wrap>
    </Container>
  );
}
