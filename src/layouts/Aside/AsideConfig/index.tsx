import React from "react";
import { AsideConfigContainer } from "./styles";
import { StatusBall } from "../../../components/ui/StatusBall";
import { UserStatus, UserStatusText } from "../../../ts/app_enum";
import { BsGearFill, BsHeadphones, BsMicFill } from "react-icons/bs";
import { IconButton } from "../../../components/ui/IconButton";
import { Tooltip } from "@chakra-ui/react";

export const AsideConfig = () => {
  return (
    <AsideConfigContainer>
      <div
        style={{
          backgroundColor: "#383838",
          width: "100%",
          height: "50px",
          padding: "0 0.5rem",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
          }}
        >
          <div style={{ display: "flex", position: "relative" }}>
            <img
              src="https://via.placeholder.com/36"
              style={{ borderRadius: "50%", height: "36px", width: "36px" }}
            />
            <StatusBall status={UserStatus.BUSY} />
          </div>
          <div
            style={{
              padding: "0 0.6rem",
              cursor: "pointer",
            }}
          >
            <p style={{ color: "white", fontSize: "0.8rem" }}>caio</p>
            <p style={{ color: "#c4c4c4", fontSize: "0.65rem" }}>
              {UserStatusText.BUSY}
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Tooltip
            label="Silenciar"
            aria-label="Mute"
            hasArrow
            borderRadius={"4px"}
          >
            <IconButton>
              <BsMicFill color="white" size={18} />
            </IconButton>
          </Tooltip>
          <Tooltip
            label="Desativar áudio"
            aria-label="Deactivate audio"
            hasArrow
            borderRadius={"4px"}
          >
            <IconButton>
              <BsHeadphones color="white" size={18} />
            </IconButton>
          </Tooltip>
          <Tooltip
            label="Configurações de usuário"
            aria-label="User settings"
            hasArrow
            borderRadius={"4px"}
          >
            <IconButton>
              <BsGearFill color="white" size={18} />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </AsideConfigContainer>
  );
};
