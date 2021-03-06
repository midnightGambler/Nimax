import styled from "styled-components";

export const SearchCardHeader = styled.div`
  height: 3.75rem;
  background: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: ${({ isOpen, query }) =>
    isOpen || query ? "4px 4px 0 0" : "4px"};
  display: flex;
`;
