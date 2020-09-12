import React from 'react';
import PropTypes from 'prop-types';

import {
  ThumbWrapper, Thumb, ImageChannel, ThumbTitle,
} from './styles';
import PlayButtonGF from '../PlayButtonGF';

const ThumbGF = ({
  src, alt, imageChannel, altChannel, title, href,
}) => (
  <ThumbWrapper as="a" href={href} target="_blank">
    <Thumb src={src} alt={alt} />
    <ImageChannel src={imageChannel} alt={altChannel} />
    <ThumbTitle>{title}</ThumbTitle>
    <PlayButtonGF />
  </ThumbWrapper>
);

ThumbGF.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  imageChannel: PropTypes.string.isRequired,
  altChannel: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default ThumbGF;
