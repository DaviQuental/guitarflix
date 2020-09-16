import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { useWindowWidth } from "@react-hook/window-size";

import ThumbGF from "../ThumbGF/index";
import { CarouselWrapper, CarouselVideos, Right, Left } from "./styles";

const CarouselGF = ({ varMap }) => {
  const [move, setMove] = useState(0);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const carouselVideos = useRef(null);
  const windowWidth = useWindowWidth();

  useEffect(
    () =>
      setCarouselWidth(carouselVideos.current.getBoundingClientRect().width),
    []
  );

  function actionRight() {
    setMove((oldMove) => oldMove - 1);
  }

  function actionLeft() {
    setMove((oldMove) => oldMove + 1);
  }

  function leftShow() {
    return move < 0;
  }

  function rightShow() {
    return move > ((carouselWidth - windowWidth) / 326) * -1;
  }

  return (
    <CarouselWrapper leftShow={leftShow()} rightShow={rightShow()}>
      <Left onClick={actionLeft} />
      <CarouselVideos ref={carouselVideos} move={move}>
        {varMap.map((info) => (
          <ThumbGF
            src={info.src}
            alt={info.alt}
            imageChannel={info.imageChannel}
            altChannel={info.altChannel}
            title={info.title}
            href={info.href}
            key={info.key}
          />
        ))}
      </CarouselVideos>
      <Right onClick={actionRight} />
    </CarouselWrapper>
  );
};

CarouselGF.propTypes = {
  varMap: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      imageChannel: PropTypes.string.isRequired,
      altChannel: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CarouselGF;
