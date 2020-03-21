import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../styles/GlobalStyles";
import { colors } from "../../styles/variables";
import searchIcon from "../../svg/search.svg";
import minifiedLogoIcon from "../../svg/logo-minified.svg";
import plusIcon from "../../svg/plus.svg";
import chevronIcon from "../../svg/chevron.svg";
import { SearchCardHeader } from "../SearchCard/SearchCardHeader/SearchCardHeader";
import { IconButton } from "../IconButtton/IconButton";
import { StyledCloseIcon, StyledSearchCard } from "./styled";
import { SearchCardHeaderInput } from "../SearchCard/SearchCardHeader/SearchCardHeaderInput/SearchCardHeaderInput";
import { SearchCardInfo } from "../SearchCard/SearchCardBody/SearchCardInfo/SearchCardInfo";
import { SearchCardBody } from "../SearchCard/SearchCardBody/SearchCardBody";

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
