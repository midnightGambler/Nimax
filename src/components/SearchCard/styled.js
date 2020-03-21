import styled from "styled-components";
import { IconButton } from "../IconButtton/IconButton";

export const StyledSearchCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: absolute;
  width: 21rem;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledChevronIcon = styled(IconButton)`
  width: 2.75rem;
`;

export const StyledCloseIcon = styled(StyledChevronIcon)`
  svg {
    transform: rotate(45deg);
  }
`;
