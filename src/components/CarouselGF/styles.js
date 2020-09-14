import styled from "styled-components";

import { ThumbWrapper } from "../ThumbGF/styles";
import container from "../../styles/tools/container";
import arrow from "../../assets/img/arrow.svg";

export const Right = styled.button`
  position: absolute;
  border: none;
  height: calc(100% - 40rem);
  width: 50rem;
  right: 0;
  background-color: var(--color-medium-blue);
  opacity: 0;
  cursor: pointer;
  transition: opacity 200ms linear, transform 200ms linear;

  &::after {
    content: url(${arrow});
  }

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1);
  }
`;

export const CarouselWrapper = styled.section`
  ${container}
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  padding: 20rem;
  overflow: hidden;

  &:hover > ${Right} {
    opacity: 0.8;
  }
`;

export const CarouselVideos = styled.div`
  display: flex;

  & > ${ThumbWrapper} {
    max-width: 300rem;
    min-width: 300rem;
    margin: 10rem;
  }

  & > ${ThumbWrapper}:first-child {
    margin-left: 0;
  }
`;
