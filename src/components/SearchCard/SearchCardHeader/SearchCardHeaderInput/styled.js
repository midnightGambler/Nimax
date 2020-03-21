import styled from "styled-components";
import { Input } from "../../../Input/Input";

export const StyledInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 0 1.25rem 1.5rem;
  flex: 1;
  ${Input} {
    flex: 1;
    padding-left: 1.5rem;
    background-image: url("./img/logo-minified.svg");
    background-position: center left;
    background-repeat: no-repeat;
    &::placeholder {
      color: ${({ theme }) => theme.textSecondary};
      padding-left: 0.5rem;
    }
  }
`;
