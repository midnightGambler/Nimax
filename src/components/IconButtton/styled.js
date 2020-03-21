import styled from "styled-components";

const borderStyles = ({ theme }) => `position: relative;
&:after {
  content: "";
  position: absolute;
  top: 33%;
  bottom: 33%;
  left: 0;
  width: 2px;
  background-color: ${theme.borderColor};
}`;

export const StyledButton = styled.button`
  background: none;
  border: none;
  outline: none;
  padding: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ withBorder }) => (withBorder ? borderStyles : ``)}
`;
