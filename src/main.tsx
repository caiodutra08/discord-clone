import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import tooltipTheme from "./ts/themes/tooltipTheme";

const theme = extendTheme({
  components: {
    Tooltip: tooltipTheme,
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider resetCSS theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
