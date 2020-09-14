import React from "react";
import PropTypes from "prop-types";

import ThumbGF from "../ThumbGF/index";
import { CarouselWrapper, CarouselVideos, Right } from "./styles";

const CarouselGF = ({ varMap }) => (
  <CarouselWrapper>
    <CarouselVideos>
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
    <Right />
  </CarouselWrapper>
);

CarouselGF.propTypes = {
  varMap: PropTypes.string.isRequired,
};

export default CarouselGF;
