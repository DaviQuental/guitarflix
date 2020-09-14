/* eslint-disable max-len */
import React from "react";

/* COMPONENTS */
import Main from "./styles";
import { BannerGF, Text } from "../../components/BannerGF";
import ThumbGF from "../../components/ThumbGF/index";
import TagGF from "../../components/TagGF";
import TitleGF from "../../components/TitleGF";
import DescriptionGF from "../../components/DescriptionGF";
import CarouselGF from "../../components/CarouselGF/index";

/* VAR IMPORT */
import { learnMusic, learnedMusic, mainThumb } from "../../data/thumbData";

const MainGF = () => (
  <Main>
    <BannerGF>
      <Text>
        <TagGF>Neon - John Mayer</TagGF>
        <TitleGF>Aprenda a tocar !</TitleGF>
        <DescriptionGF>
          Neste vídeo, o músico Leo Eymard ensina a tocar uma música cheia de
          detalhes e desafios ! Aprenda a tocá-la e chame atenção de todos !
        </DescriptionGF>
      </Text>
      <ThumbGF
        src={mainThumb.src}
        alt={mainThumb.alt}
        imageChannel={mainThumb.imageChannel}
        altChannel={mainThumb.altChannel}
        title={mainThumb.title}
        href={mainThumb.href}
      />
    </BannerGF>
    <CarouselGF title="Musicas para aprender" varMap={learnMusic} />
    <CarouselGF title="Musicas aprendidas" varMap={learnedMusic} />
  </Main>
);

export default MainGF;
