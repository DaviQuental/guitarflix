import styled from 'styled-components';

import { ThumbWrapper } from '../ThumbGF/styles';
import container from '../../styles/tools/container';

export const RollerWrapper = styled.section`
    ${container}
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: rgba(0,0,0,0.5);
`;

export const RollerDescription = styled.p`
    font-size: 20rem;
    color: var(--light-color);
`;

export const RollerVideos = styled.div`
    display: flex;

    & > ${ThumbWrapper} {
        width: 300rem;
        margin: 10rem;
    }

    & > ${ThumbWrapper}:first-child {
        margin-left: 0;
    }
`;