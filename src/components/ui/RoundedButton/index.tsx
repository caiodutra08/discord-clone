import React from "react";
import { Button } from "./styles";

interface RoundedButtonProps {
  image: string;
  onClick?: () => void;
}

export const RoundedButton = React.forwardRef(
  (
    { image, onClick, ...rest }: RoundedButtonProps,
    ref: React.Ref<HTMLButtonElement>
  ) => {
    return <Button ref={ref} onClick={onClick} $image={image} {...rest} />;
  }
);
