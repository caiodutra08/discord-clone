import React from "react";
import { UserStatus, UserStatusColor } from "../../../ts/app_enum";
import {
  BsMoonFill,
  BsRecordFill,
  BsFillDashCircleFill,
  BsRecordCircleFill,
} from "react-icons/bs";

interface StatusBallProps {
  status: UserStatus;
}

export const StatusBall = ({ status }: StatusBallProps) => {
  const statusContent = () => {
    switch (status) {
      case UserStatus.AVAILABLE:
        return (
          <BsRecordFill
            color={UserStatusColor.AVAILABLE}
            height="1rem"
            width="1rem"
          />
        );
      case UserStatus.BUSY:
        return <BsFillDashCircleFill color={UserStatusColor.BUSY} size={11} />;
      case UserStatus.AWAY:
        return (
          <BsMoonFill
            color={UserStatusColor.AWAY}
            size={11}
            transform="rotate(270)"
          />
        );
      case UserStatus.OFFLINE:
      default:
        return <BsRecordCircleFill size={11} color={UserStatusColor.OFFLINE} />;
    }
  };
  return (
    <div
      style={{
        borderRadius: "50%",
        backgroundColor: "#383838",
        height: "fit-content",
        width: "fit-content",
        minWidth: "16px",
        minHeight: "16px",
        left: " 25px",
        top: "20px",
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span>{statusContent()}</span>
    </div>
  );
};
