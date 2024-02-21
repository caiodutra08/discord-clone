import { cssVar, defineStyleConfig } from "@chakra-ui/react";

const $arrowBg = cssVar("popper-arrow-bg");

const baseStyle = {
  backgroundColor: "#272727",
  [$arrowBg.variable]: "#272727",
};

export default defineStyleConfig({ baseStyle });