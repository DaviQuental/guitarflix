import React from 'react'

/* COMPONENTS */
import Main from './styles'
import { BannerGF, Text } from '../../components/BannerGF';
import TagGF from '../../components/TagGF';
import TitleGF from '../../components/TitleGF';
import DescriptionGF from '../../components/DescriptionGF';
import ThumbGF from '../../components/ThumbGF';

/* ASSETS */
import neon from '../../assets/img/john-neon.jpg'
import cifraclub from '../../assets/img/cifraclub.jpg'


const MainGF = () => (
    <Main>
        <BannerGF>
            <Text>
                <TagGF>Neon - John Mayer</TagGF>
                <TitleGF>Aprenda a tocar !</TitleGF>
                <DescriptionGF>Neste vídeo, o músico Leo Eymard ensina a tocar uma música cheia de detalhes e desafios ! Aprenda a tocá-la e chame atenção de todos ! </DescriptionGF>
            </Text>
            <ThumbGF
                src={neon}
                alt='Foto de capa: John Mayer - Neon'
                imageChannel={cifraclub}
                altChannel='Cifraclub'
                title='Neon - John Mayer (aula de violão)'
            />
        </BannerGF>
    </Main>
);

export default MainGF;