import React, { useRef, useEffect } from "react";
import SVG from "react-inlinesvg";
import minifiedLogoIcon from "../../../../svg/logo-minified.svg";
import { StyledInputWrapper } from "./styled";
import { Input } from "../../../Input/Input";

export const SearchCardHeaderInput = props => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <StyledInputWrapper>
      {/* <SVG width="12px" src={minifiedLogoIcon} /> */}
      <Input {...props} ref={inputRef} placeholder="Search field location" />
    </StyledInputWrapper>
  );
};
