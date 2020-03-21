import React from "react";
import SVG from "react-inlinesvg";
import styled from "styled-components";
import logoIcon from "../../svg/logo.svg";

const StyledLogo = styled(SVG)`
  width: 5rem;
  margin-right: auto;
  margin-left: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const Logo = () => <StyledLogo src={logoIcon} />;
