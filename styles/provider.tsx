import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import theme from "./theme";

const ThemeProvider: React.FC = ({ children }) => {
  return (
    <ChakraProvider theme={theme} resetCSS>
      {children}
    </ChakraProvider>
  );
};

export default ThemeProvider;
