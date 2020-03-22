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
export const StyledIconButton = styled(IconButton)`
  padding: 0;
  flex: 0 0 12.5%;
`;
export const StyledChevronIcon = styled(StyledIconButton)`
  svg {
    transition: 0.2s transform ease-in;
    ${({ isOpen }) => (isOpen ? rotate : "")}
  }
`;
