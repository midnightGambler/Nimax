import React, { useState } from "react";
import {
  StyledSearchCard,
  StyledChevronIcon,
  StyledIconButton
} from "./styled";
import { SearchCardHeader } from "./SearchCardHeader/SearchCardHeader";
import { SearchCardBody } from "./SearchCardBody/SearchCardBody";
import { SearchCardHeaderInput } from "./SearchCardHeader/SearchCardHeaderInput/SearchCardHeaderInput";
import { SearchList } from "./SearchCardBody/SearchList/SearchList";
import searchIcon from "../../svg/search.svg";
import closeIcon from "../../svg/close.svg";
import chevronIcon from "../../svg/chevron.svg";
import { SearchCardInfo } from "./SearchCardBody/SearchCardInfo/SearchCardInfo";
import { Logo } from "../Logo/Logo";
import { searchItems } from "../../fixtures/searchItems";
import { useSearch } from "../../hooks/useSearch";

export const SearchCard = ({ className }) => {
  const [isOpen, toggle] = useState(false);
  const [isSearchActive, toggleSearch] = useState(false);
  const [query, setQuery] = useState("");
  const items = useSearch(query, searchItems);

  const onChange = e => {
    if (/^[a-zA-Z-" "]+$/.test(e.target.value) || e.target.value === "") {
      setQuery(e.target.value);
    }
  };

  const handleSearchBtn = () => {
    toggle(false);
    toggleSearch(true);
  };

  const handleCloseBtn = () => {
    toggleSearch(false);
    setQuery("");
  };

  return (
    <StyledSearchCard className={className}>
      <SearchCardHeader query={query} isOpen={isOpen}>
        {isSearchActive && (
          <SearchCardHeaderInput value={query} onChange={onChange} />
        )}
        {!isSearchActive && <Logo />}
        <StyledIconButton
          onClick={handleSearchBtn}
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
          <StyledIconButton
            onClick={handleCloseBtn}
            withBorder
            width="11px"
            src={closeIcon}
          />
        )}
      </SearchCardHeader>

      <SearchCardBody>
        {isOpen && <SearchCardInfo />}
        {items && query && <SearchList items={items} />}
      </SearchCardBody>
    </StyledSearchCard>
  );
};
