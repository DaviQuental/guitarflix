import styled, { css } from "styled-components";

const TagGF = styled.h2`
  display: inline-block;
  color: var(--color-light-gray);
  font-size: 50rem;
  padding: 20rem 18rem;
  border-radius: 4rem;
  background-color: var(--color-light-blue);

  ${({ small, medium }) =>
    (small &&
      css`
        font-size: 15rem;
      `) ||
    (medium &&
      css`
        font-size: 35rem;
      `)}
`;

export default TagGF;
