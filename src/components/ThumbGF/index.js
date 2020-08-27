import React from 'react';

import { ThumbWrapper, Thumb, ImageChannel, ThumbTitle } from './styles'

const ThumbGF = ({ src, alt, imageChannel, altChannel, title }) => (
    <ThumbWrapper>
        <Thumb src={src} alt={alt} />
        <ImageChannel src={imageChannel} alt={altChannel} />
        <ThumbTitle>{title}</ThumbTitle>
    </ThumbWrapper>
);

export default ThumbGF;