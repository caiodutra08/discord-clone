import React from "react";
import { IconButtonContainer } from "./styles";

interface IconButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const IconButton = React.forwardRef(
  (
    { children, onClick, ...rest }: IconButtonProps,
    ref: React.Ref<HTMLButtonElement>
  ) => {
    return (
      <IconButtonContainer ref={ref} onClick={onClick} {...rest}>
        {children}
      </IconButtonContainer>
    );
  }
);
