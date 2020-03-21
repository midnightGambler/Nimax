import React from "react";
import { StyledList, StyledListItem } from "./styled";

export const SearchList = ({ items }) => {
  return (
    <StyledList>
      {items.map(item => (
        <StyledListItem key={item} dangerouslySetInnerHTML={{ __html: item }} />
      ))}
    </StyledList>
  );
};
