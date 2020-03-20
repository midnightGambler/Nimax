import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../styles/GlobalStyles";
import { colors } from "../../styles/variables";

const StyledWrapper = styled.div`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 21rem;
  height: 3.75rem;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
`;

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={colors}>
        <StyledWrapper>Nimax</StyledWrapper>
      </ThemeProvider>
    </>
  );
};
