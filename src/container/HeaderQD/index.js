import React from 'react';

import { Header, Wrapper } from './styles'
import LogoQD from '../../components/LogoQD/index';
import ButtonQD from '../../components/ButtonQD/index';

const HeaderQD = () => (
    <Header>
        <Wrapper>
            <LogoQD />
            <ButtonQD>Novo Vídeo</ButtonQD>
        </Wrapper>
    </Header>
);

export default HeaderQD;