import styled from "styled-components";

import { BannerGF } from "../../components/BannerGF";
import container from "../../styles/tools/container";

const Main = styled.main`
  ${container}

  & > ${BannerGF} {
    width: 100vw;
    height: 70vh;
  }
`;

export default Main;
