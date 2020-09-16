import styled, { css } from "styled-components";

import { ThumbWrapper } from "../ThumbGF/styles";
import arrow from "../../assets/img/arrow.svg";

const Arrow = css`
  position: absolute;
  border: none;
  height: calc(100% - 40rem);
  width: 50rem;
  background-color: var(--primary-light-color);
  opacity: 0;
  cursor: pointer;
  transition: opacity 200ms linear, transform 200ms linear;
  z-index: 1;

  &::after {
    content: url(${arrow});
    display: inline-block;
  }

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1);
  }
`;

export const Right = styled.button`
  ${Arrow}
  right: 0;
`;

export const Left = styled.button`
  ${Arrow}
  left: 0;

  &::after {
    transform-origin: center;
    transform: rotate(180deg);
  }
`;

export const CarouselWrapper = styled.section`
  --thumb-width: 300rem;
  --margin-all-direction: 10rem;
  --padding-container: 16rem;
  position: relative;
  display: flex;
<<<<<<< HEAD
=======
  background-color: rgba(0, 0, 0, 0.5);
>>>>>>> cc917d782e28ecf64dd14223708630754d976894
  box-sizing: border-box;
  padding: 20rem;
  overflow: hidden;
  width: 100%;

  &:hover > ${Right} {
    ${({ rightShow }) =>
      rightShow
        ? css`
            visibility: visible;
            opacity: 0.8;
          `
        : css`
            visibility: hidden;
            opacity: 0;
          `}
  }
  &:hover > ${Left} {
    ${({ leftShow }) =>
      leftShow
        ? css`
            visibility: visible;
            opacity: 0.8;
          `
        : css`
            visibility: hidden;
            opacity: 0;
          `}
  }
`;

export const CarouselVideos = styled.div`
  display: flex;
  transition: transform 250ms linear;

  ${({ move }) =>
    css`
      transform: translateX(
        calc(
          (
              var(--thumb-width) + var(--margin-all-direction) +
                var(--padding-container)
            ) * ${move}
        )
      );
    `}

  & > ${ThumbWrapper} {
    max-width: var(--thumb-width);
    min-width: var(--thumb-width);
    margin: var(--margin-all-direction);
  }

  & > ${ThumbWrapper}:first-child {
    margin-left: 0;
  }
`;
