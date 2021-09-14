import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import "../styles/globals.css";

const theme = extendTheme({
  fonts: {
    heading: "Roboto, sans-serif",
    body: "Roboto, sans-serif",
  },
  colors: {
    brand: {
      primary: "#BB371A",
      secondary: "#EBA83A",
      tertiary: "#FFF8D9",
    },
  },
});

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Global />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
