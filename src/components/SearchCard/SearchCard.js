import React, { useState, useEffect } from "react";
import { StyledSearchCard, StyledCloseIcon, StyledChevronIcon } from "./styled";
import { SearchCardHeader } from "./SearchCardHeader/SearchCardHeader";
import { SearchCardBody } from "./SearchCardBody/SearchCardBody";
import { SearchCardHeaderInput } from "./SearchCardHeader/SearchCardHeaderInput/SearchCardHeaderInput";
import { SearchList } from "./SearchCardBody/SearchList/SearchList";
import { IconButton } from "../IconButtton/IconButton";
import searchIcon from "../../svg/search.svg";
import plusIcon from "../../svg/plus.svg";
import chevronIcon from "../../svg/chevron.svg";
import { SearchCardInfo } from "./SearchCardBody/SearchCardInfo/SearchCardInfo";
import { Logo } from "../Logo/Logo";
import { searchItems } from "../../fixtures/searchItems";

export const SearchCard = ({ className }) => {
  const [isOpen, toggle] = useState(false);
  const [isSearchActive, toggleSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [items, setListItems] = useState([]);

  useEffect(() => {
    handleSearch();
  }, [query]);

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

  const handleSearch = () => {
    const listItems = [];
    const lowCaseQuery = query.toLowerCase();

    Object.keys(searchItems).map(country =>
      searchItems[country].forEach(city => {
        if (city.toLowerCase().startsWith(lowCaseQuery)) {
          const markedCity = city.replace(
            new RegExp(lowCaseQuery, "i"),
            match => `<b>${match}</b>`
          );
          listItems.push(
            `${markedCity}, <span class='text-offset'>${country}</span>`
          );
        }
      })
    );
    setListItems(listItems);
  };

  return (
    <StyledSearchCard className={className}>
      <SearchCardHeader query={query} isOpen={isOpen}>
        {isSearchActive && (
          <SearchCardHeaderInput value={query} onChange={onChange} />
        )}
        {!isSearchActive && <Logo />}
        <IconButton onClick={handleSearchBtn} width="16px" src={searchIcon} />
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
            onClick={handleCloseBtn}
            withBorder
            width="14px"
            src={plusIcon}
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
