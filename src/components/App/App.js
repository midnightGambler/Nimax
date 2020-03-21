import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../styles/GlobalStyles";
import { colors } from "../../styles/variables";
import { StyledSearchCard } from "./styled";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={colors}>
        <StyledSearchCard />
      </ThemeProvider>
    </>
  );
};
