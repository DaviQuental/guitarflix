import React from 'react';

import { ThumbWrapper, Thumb, ImageChannel, ThumbTitle } from './styles'
import PlayButtonGF from '../PlayButtonGF';

const ThumbGF = ({ src, alt, imageChannel, altChannel, title, href }) => (
    <ThumbWrapper as='a' href={href} target='_blank'>
        <Thumb src={src} alt={alt} />
        <ImageChannel src={imageChannel} alt={altChannel} />
        <ThumbTitle>{title}</ThumbTitle>
        <PlayButtonGF />
    </ThumbWrapper>
);

export default ThumbGF;
