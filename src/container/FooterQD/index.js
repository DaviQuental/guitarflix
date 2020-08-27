import React from 'react';

import Footer from './styles';
import LinkQD from '../../components/LinkQD';
import LogoQD from '../../components/LogoQD';

const FooterQD = () => (
    <Footer>
        <LogoQD />
        <p>
            Projeto criado por <LinkQD href='https://github.com/DaviQuental' target='_blank'>Davi Quental</LinkQD>
        </p>
    </Footer>
);

export default FooterQD;