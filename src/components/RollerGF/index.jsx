import React from 'react';
import PropTypes from 'prop-types';

import ThumbGF from '../ThumbGF/index';
import { RollerWrapper, RollerVideos, RollerDescription } from './styles';

const RollerGF = ({ title, varMap }) => (
  <RollerWrapper>
    <RollerDescription>{title}</RollerDescription>
    <RollerVideos>
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
    </RollerVideos>
  </RollerWrapper>
);

RollerGF.propTypes = {
  title: PropTypes.string.isRequired,
  varMap: PropTypes.string.isRequired,
};

export default RollerGF;
