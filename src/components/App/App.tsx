import * as React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "../../routes";
import { AppContainer } from "./styles";
import { Aside } from "../../layouts/Aside";

export default function App() {
  return (
    <AppContainer>
      <Aside />
      <RouterProvider router={router} />
    </AppContainer>
  );
}
