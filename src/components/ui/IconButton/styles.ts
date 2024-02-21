import { styled } from "styled-components";

export const IconButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 0.2rem;
  cursor: pointer;

  &:hover {
    background-color: rgb(96 96 96);
  }

  transition: background-color 0.2s;
`;
