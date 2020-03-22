import styled from "styled-components";
import { IconButton } from "../IconButtton/IconButton";

const rotate = `
  transform: rotate(180deg);
`;

export const StyledSearchCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const StyledChevronIcon = styled(IconButton)`
  width: 2.75rem;
  svg {
    transition: 0.2s transform ease-in;
    ${({ isOpen }) => (isOpen ? rotate : "")}
  }
`;

export const StyledCloseIcon = styled(IconButton)`
  width: 2.75rem;
`;
