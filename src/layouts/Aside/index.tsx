import React from "react";
import { AsideContainer, AsideWrapper } from "./styles";
import { AsideItem } from "./AsideItem";
import { Server } from "../../ts/app_interfaces";
import { Separator } from "../../components/ui/Separator";
import { AsideConfig } from "./AsideConfig";

const servers = [
  {
    id: self.crypto.randomUUID(),
    name: "Server 1",
    image: "https://via.placeholder.com/48",
    isSilenced: false,
  },
  {
    id: self.crypto.randomUUID(),
    name: "Server 2",
    image: "https://via.placeholder.com/48",
    isSilenced: false,
  },
  {
    id: self.crypto.randomUUID(),
    name: "Server 3",
    image: "https://via.placeholder.com/48",
    isSilenced: false,
  },
  {
    id: self.crypto.randomUUID(),
    name: "Server 4",
    image: "https://via.placeholder.com/48",
    isSilenced: false,
  },
  {
    id: self.crypto.randomUUID(),
    name: "Server 5",
    image: "https://via.placeholder.com/48",
    isSilenced: false,
  },
] as Server[];

const directMessages = {
  id: self.crypto.randomUUID(),
  name: "Direct Messages",
  image: "https://via.placeholder.com/48",
  isSilenced: false,
} as Server;

export const Aside = () => {
  return (
    <AsideContainer>
      <AsideWrapper>
        <AsideItem key={self.crypto.randomUUID()} server={directMessages} />
        <Separator width="50%" />
        {servers.map((server) => (
          <AsideItem key={server.id} server={server} />
        ))}
      </AsideWrapper>
      <AsideConfig />
    </AsideContainer>
  );
};
