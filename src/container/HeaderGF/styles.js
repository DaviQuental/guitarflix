import styled from "styled-components";

import ButtonGF from "../../components/ButtonGF/index";
import container from "../../styles/tools/container";

export const Header = styled.header`
  background-color: var(--dark-color);
  padding: 15rem 40rem;
  border-bottom: 3px solid var(--primary-medium-color);

  @media (max-width: 800px) {
    padding: 15rem 16rem;
  }
`;

export const Wrapper = styled.div`
  ${container};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 800px) {
    & {
      justify-content: center;
    }

    & > ${ButtonGF} {
      background-color: var(--primary-medium-color);
      border-radius: 0;
      border: none;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100vw;
    }
  }
`;
