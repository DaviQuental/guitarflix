import styled from "styled-components";

const PlayButtonGF = styled.span.attrs(() => ({
  className: "fas fa-play-circle",
}))`
  font-size: 50rem;
  color: var(--primary-light-color);
  background-color: var(--light-color);
  border-radius: 50%;
  opacity: 0;
  transition: opacity 200ms linear, scale 200ms linear;
`;

export default PlayButtonGF;
