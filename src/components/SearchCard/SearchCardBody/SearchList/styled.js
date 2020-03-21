import styled from "styled-components";

export const StyledList = styled.ul`
  max-height: 15rem;
  overflow-y: auto;
  border-top: 1px solid ${({ theme }) => theme.borderColor};
`;

export const StyledListItem = styled.li`
  padding: 1rem 3rem;
  .text-offset {
    color: ${({ theme }) => theme.textHint};
  }
`;
