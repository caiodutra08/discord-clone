import React from "react";
import { RoundedButton } from "../../../components/ui/RoundedButton";
import { Server } from "../../../ts/app_interfaces";
import { Tooltip } from "@chakra-ui/react";

interface LeftMenuItemProps {
  server: Server;
}

export const AsideItem = ({ server }: LeftMenuItemProps) => {
  return (
    <Tooltip
      hasArrow
      label={server.name}
      placement="right"
      borderRadius={"4px"}
      arrowSize={8}
    >
      <RoundedButton image={server.image} />
    </Tooltip>
  );
};
