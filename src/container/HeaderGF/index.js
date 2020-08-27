import React from 'react';

import { Header, Wrapper } from './styles'
import LogoGF from '../../components/LogoGF/index';
import ButtonGF from '../../components/ButtonGF/index';

const HeaderGF = () => (
    <Header>
        <Wrapper>
            <LogoGF />
            <ButtonGF>Novo Vídeo</ButtonGF>
        </Wrapper>
    </Header>
);

export default HeaderGF;