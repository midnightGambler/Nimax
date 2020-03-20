import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../styles/GlobalStyles";
import { colors } from "../../styles/variables";
import searchIcon from "../../svg/search.svg";
import minifiedLogoIcon from "../../svg/logo-minified.svg";
import plusIcon from "../../svg/plus.svg";
import SVG from "react-inlinesvg";

const SearchCardHeader = styled.div`
  height: 3.75rem;
  background: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  display: flex;
`;

const StyledDropdownMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 0 1.25rem 1rem;
  flex: 1;
`;

const StyleInput = styled.input`
  flex: 1;
  border: none;
  padding-left: 10px;
  outline: none;
  caret-color: ${({ theme }) => theme.primary};
`;

const StyledButton = styled.button`
  background: none;
  border: none;
  outline: none;
  padding: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconButton = ({ className, onClick, ...rest }) => (
  <StyledButton className={className} onClick={onClick}>
    <SVG {...rest} />
  </StyledButton>
);

const StyledIconButton = styled(IconButton)`
  position: relative;
  svg {
    transform: rotate(45deg);
  }

  &:after {
    content: "";
    position: absolute;
    top: 33%;
    bottom: 33%;
    left: 0;
    width: 2px;
    background-color: ${({ theme }) => theme.borderColor};
  }
`;

const StyledSearchCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 21rem;
`;

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={colors}>
        <StyledSearchCard>
          <SearchCardHeader>
            <StyledDropdownMenu>
              <SVG width="12px" src={minifiedLogoIcon} />
              <StyleInput />
            </StyledDropdownMenu>
            <IconButton width="16px" src={searchIcon} />
            <StyledIconButton width="14px" src={plusIcon} />
          </SearchCardHeader>
        </StyledSearchCard>
      </ThemeProvider>
    </>
  );
};
