import styled from "styled-components";

type ButtonProps = {
  $image: string;
};

export const Button = styled.button<ButtonProps>`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background-color: black;
  border: none;
  cursor: pointer;
  background-image: url(${(props) => props.$image});

  &:hover {
    border-radius: 25%;
  }

  transition: border-radius 0.2s;
`;
