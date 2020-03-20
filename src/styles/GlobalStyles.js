import { createGlobalStyle } from "styled-components";
import { colors } from "./variables";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  color: ${colors.textPimary};
}
html {
  font-size: 16px;
}
body {
  background-color: ${colors.bodyBG};
}
ul {
  list-style: none;
}

#app {
  height: 100vh;
}
`;
