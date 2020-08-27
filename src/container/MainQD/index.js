import React from 'react'

/* COMPONENTS */
import Main from './styles'
import { BannerQD, Text } from '../../components/BannerQD';
import TagQD from '../../components/TagQD';
import TitleQD from '../../components/TitleQD';
import DescriptionQD from '../../components/DescriptionQD';
import ThumbQD from '../../components/ThumbQD';

/* ASSETS */
import neon from '../../assets/img/john-neon.jpg'
import cifraclub from '../../assets/img/cifraclub.jpg'


const MainQD = () => (
    <Main>
        <BannerQD>
            <Text>
                <TagQD>Neon - John Mayer</TagQD>
                <TitleQD>Aprenda a tocar !</TitleQD>
                <DescriptionQD>Neste vídeo, o músico Leo Eymard ensina a tocar uma música cheia de detalhes e desafios ! Aprenda a tocá-la e chame atenção de todos ! </DescriptionQD>
            </Text>
            <ThumbQD
                src={neon}
                alt='Foto de capa: John Mayer - Neon'
                imageChannel={cifraclub}
                altChannel='Cifraclub'
                title='Neon - John Mayer (aula de violão)'
            />
        </BannerQD>
    </Main>
);

export default MainQD;