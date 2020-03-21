import React from "react";
import { StyledSearchCard, StyledCloseIcon, StyledChevronIcon } from "./styled";
import { SearchCardHeader } from "./SearchCardHeader/SearchCardHeader";
import { SearchCardBody } from "./SearchCardBody/SearchCardBody";
import { SearchCardHeaderInput } from "./SearchCardHeader/SearchCardHeaderInput/SearchCardHeaderInput";
import { IconButton } from "../IconButtton/IconButton";
import searchIcon from "../../svg/search.svg";
import plusIcon from "../../svg/plus.svg";
import chevronIcon from "../../svg/chevron.svg";
import { SearchCardInfo } from "./SearchCardBody/SearchCardInfo/SearchCardInfo";

export const SearchCard = () => {
  return (
    <StyledSearchCard>
      <SearchCardHeader>
        <SearchCardHeaderInput />
        <IconButton width="16px" src={searchIcon} />
        <StyledChevronIcon withBorder width="10px" src={chevronIcon} />
        {/* <StyledCloseIcon withBorder width="14px" src={plusIcon} /> */}
      </SearchCardHeader>

      <SearchCardBody>
        <SearchCardInfo />
      </SearchCardBody>
    </StyledSearchCard>
  );
};
