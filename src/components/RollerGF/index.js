import React from 'react';

import ThumbGF from '../ThumbGF/index';
import { RollerWrapper, RollerVideos, RollerDescription } from './styles';

const RollerGF = ({ title, varMap }) => {

    return (
        <RollerWrapper>
            <RollerDescription>{title}</RollerDescription>
            <RollerVideos>
                {varMap.map((info) => (
                    <ThumbGF src={info.src} alt={info.alt} imageChannel={info.imageChannel} altChannel={info.altChannel} title={info.title} href={info.href} />
                ))}
            </RollerVideos>
        </RollerWrapper>
    );


};

export default RollerGF;