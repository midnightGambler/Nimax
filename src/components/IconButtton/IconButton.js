import React from "react";
import { StyledButton } from "./styled";
import SVG from "react-inlinesvg";

export const IconButton = ({ className, onClick, withBorder, ...rest }) => (
  <StyledButton className={className} onClick={onClick} withBorder={withBorder}>
    <SVG {...rest} />
  </StyledButton>
);
