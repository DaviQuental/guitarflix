import React, { useState } from "react";
import PropTypes from "prop-types";

import ThumbGF from "../ThumbGF/index";
import { CarouselWrapper, CarouselVideos, Right, Left } from "./styles";

const CarouselGF = ({ varMap }) => {
  const [move, setMove] = useState(0);

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
    return move > (varMap.length - 4) * -1;
  }

  return (
    <CarouselWrapper leftShow={leftShow()} rightShow={rightShow()}>
      <Left onClick={actionLeft} />
      <CarouselVideos move={move}>
        {varMap.map((info) => (
          <ThumbGF
            src={info.src}
            alt={info.alt}
            imageChannel={info.imageChannel}
            altChannel={info.altChannel}
            title={info.title}
            href={info.href}
          />
        ))}
      </CarouselVideos>
      <Right onClick={actionRight} />
    </CarouselWrapper>
  );
};

CarouselGF.propTypes = {
  varMap: PropTypes.string.isRequired,
};

export default CarouselGF;
