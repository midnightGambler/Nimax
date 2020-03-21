import React from "react";
import SVG from "react-inlinesvg";
import minifiedLogoIcon from "../../../../svg/logo-minified.svg";
import { StyledInputWrapper } from "./styled";
import { Input } from "../../../Input/Input";

export const SearchCardHeaderInput = () => (
  <StyledInputWrapper>
    <SVG width="12px" src={minifiedLogoIcon} />
    <Input />
  </StyledInputWrapper>
);
