import styled from "styled-components";

import { BannerGF } from "../../components/BannerGF";
import TagGF from "../../components/TagGF";
import container from "../../styles/tools/container";

const Main = styled.main`
  ${container}

  & > ${TagGF} {
    margin-left: 20rem;
  }

  & > ${BannerGF} {
    width: 100vw;
    height: 100vh;
  }
`;

export default Main;
