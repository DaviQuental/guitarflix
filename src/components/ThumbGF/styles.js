import styled from 'styled-components';
import PlayButtonGF from '../PlayButtonGF';

export const ImageChannel = styled.img`
    position: absolute;
    top: var(--space);
    left: var(--space);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid var(--color-medium-blue);
    transform: translateX(calc((100% + var(--space)) * -1));
    opacity: 0;
    transition: transform 200ms linear, opacity 100ms linear;
`;

export const Thumb = styled.img`
    width: 100%;
`;

export const ThumbTitle = styled.p`
    position: absolute;
    top: 25rem;
    left: 75rem;
    font-size: 20rem;
    color: var(--light-color);
    transform: translateX(calc((100% + var(--space)) * -1));
    transition: transform 200ms linear, opacity 100ms linear;
    opacity: 0;
`;

export const ThumbWrapper = styled.figure`
    --space: 10rem;
    width: 640px;
    position: relative;
    border-radius: 4rem;
    border: 2rem solid var(--color-medium-blue); 
    overflow: hidden;
    cursor: pointer;
    transition: scale 200ms linear;

    & > ${PlayButtonGF} {
        position: absolute;
        left: 45%;
        top: 45%;
    }

    &:hover {
        scale: 1.1;
        & > ${ImageChannel}{
            opacity: 1;
            transform: translateX(0);
            transition: transform 100ms 175ms linear, opacity 100ms 175ms linear;
        }

        & > ${ThumbTitle} {
            opacity: 1;
            transform: translateX(0);
            transition: transform 100ms 175ms linear, opacity 300ms 175ms linear;
        }

        & > ${PlayButtonGF} {
            opacity: 1;
            transition: opacity 200ms 175ms linear, scale 200ms 175ms linear;
        }
    }

    &:active {
        & > ${PlayButtonGF} {
            scale: 1.5;
            background-color: var(--dark-color);
            transition: scale 150ms linear;
        }
    }

    &::before {
        position: absolute;
        top: 0;
        content: '';
        vertical-align: center;
        width: 100%;
        height: 75rem;
        background-color: var(--video-shadow);
        transform: translateY(-100%);
        transition: transform 200ms linear;
    }

    &:hover::before {
        transform: translateY(0);
        transition: transform 100ms 175ms linear;
    }

`;

