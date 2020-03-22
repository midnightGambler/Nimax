import styled from "styled-components";

export const Input = styled.input`
  border: none;
  outline: none;
  caret-color: ${({ theme }) => theme.primary};
  width: 100%;
`;
