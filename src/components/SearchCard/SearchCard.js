import React, { useState } from "react";
import { StyledSearchCard, StyledCloseIcon, StyledChevronIcon } from "./styled";
import { SearchCardHeader } from "./SearchCardHeader/SearchCardHeader";
import { SearchCardBody } from "./SearchCardBody/SearchCardBody";
import { SearchCardHeaderInput } from "./SearchCardHeader/SearchCardHeaderInput/SearchCardHeaderInput";
import { IconButton } from "../IconButtton/IconButton";
import searchIcon from "../../svg/search.svg";
import plusIcon from "../../svg/plus.svg";
import chevronIcon from "../../svg/chevron.svg";
import { SearchCardInfo } from "./SearchCardBody/SearchCardInfo/SearchCardInfo";
import { Logo } from "../Logo/Logo";

export const SearchCard = ({ className }) => {
  const [isOpen, toggle] = useState(false);
  const [isSearchActive, toggleSearch] = useState(false);

  const onChange = e => console.log(e.target.value);

  return (
    <StyledSearchCard className={className}>
      <SearchCardHeader isOpen={isOpen}>
        {isSearchActive && <SearchCardHeaderInput onChange={onChange} />}
        {!isSearchActive && <Logo />}
        <IconButton
          onClick={toggleSearch.bind(null, true)}
          width="16px"
          src={searchIcon}
        />
        {!isSearchActive && (
          <StyledChevronIcon
            isOpen={isOpen}
            onClick={toggle.bind(null, !isOpen)}
            withBorder
            width="10px"
            src={chevronIcon}
          />
        )}
        {isSearchActive && (
          <StyledCloseIcon
            onClick={toggleSearch.bind(null, false)}
            withBorder
            width="14px"
            src={plusIcon}
          />
        )}
      </SearchCardHeader>

      <SearchCardBody>{isOpen && <SearchCardInfo />}</SearchCardBody>
    </StyledSearchCard>
  );
};
