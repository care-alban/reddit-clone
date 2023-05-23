import { extendTheme } from "@chakra-ui/react";
import { Button } from "./button";

export const theme = extendTheme({
  colors: {
    brand: {
      100: "#FF3c00",
    },
  },
  fonts: {
    body: "Open Sans, sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "gray.200",
      },
    },
  },
  components: {
    Button,
    Link: {
      baseStyle: {
        color: "blue.500",
        backgroundColor: "transparent",
        _hover: {
          textDecoration: "none",
        },
      },
    },
  },
});
