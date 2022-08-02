
import GlobalStyle from './stylesGlobais'
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./containes/lista";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <><App /> <GlobalStyle/></>
  </StrictMode>
);