import React from "react";
import { Flex } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout(props) {
  return (
    <Flex direction="column" align="center" m="auto" overflowX="hidden" {...props}>
      <Navbar />
      {props.children}
      <Footer />
    </Flex>
  );
}
