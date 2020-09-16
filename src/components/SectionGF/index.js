import styled from "styled-components";

import DescriptionGF from "../DescriptionGF";
import TagGF from "../TagGF";

const SectionGF = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > ${TagGF} {
    margin-left: 20rem;
  }

  & > ${TagGF}:first-child {
    align-self: center;
    margin-bottom: 20rem;
    margin-left: 0;
  }
  & > ${DescriptionGF} {
    width: 800px;
    font-size: 25rem;
    align-self: center;
    text-align: justify;
    margin-bottom: 40rem;
  }
`;

export default SectionGF;
