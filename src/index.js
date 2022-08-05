
import GlobalStyle from './styles/stylesGlobais'
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Routes from './routes';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <><Routes /> <GlobalStyle/></>
  </StrictMode>
);