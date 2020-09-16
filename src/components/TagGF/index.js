import styled, { css } from "styled-components";

const TagGF = styled.h2`
  display: inline-block;
  color: var(--color-light-gray);
  font-size: 50rem;
  padding: 20rem 18rem;
  border-radius: 4rem;
  background-color: #db8544;
  font-weight: 600;

  ${({ small, medium }) =>
    (small &&
      css`
        font-size: 20rem;
      `) ||
    (medium &&
      css`
        font-size: 40rem;
      `)}
`;

export default TagGF;
