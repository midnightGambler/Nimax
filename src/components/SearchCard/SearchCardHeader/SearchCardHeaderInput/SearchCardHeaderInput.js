import React, { useRef, useEffect } from "react";
import { StyledInputWrapper } from "./styled";
import { Input } from "../../../Input/Input";

export const SearchCardHeaderInput = props => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <StyledInputWrapper>
      <Input {...props} ref={inputRef} placeholder="Search field locations" />
    </StyledInputWrapper>
  );
};
