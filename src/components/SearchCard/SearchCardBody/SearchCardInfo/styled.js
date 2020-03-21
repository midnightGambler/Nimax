import styled from "styled-components";

export const StyledSearchCardInfo = styled.div`
  padding: 0 1.5rem 1.5rem;

  h1 {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.75rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 15px;
    line-height: 1.4rem;
    margin-bottom: 0.5rem;
  }

  a {
    font-size: 15px;
    line-height: 21px;
    color: ${({ theme }) => theme.primary};
    text-decoration: underline;
  }
`;
