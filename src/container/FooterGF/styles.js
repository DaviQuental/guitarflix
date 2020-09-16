import styled from "styled-components";
import LinkGF from "../../components/LinkGF";
import LogoGF from "../../components/LogoGF";

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20rem 0;
  background-color: var(--dark-color);
  color: var(--light-color);
  font-size: 16rem;
  border-top: 3px solid var(--primary-medium-color);
  margin-top: 20rem;

  & > ${LogoGF} {
    margin-bottom: 20rem;
  }
  & ${LinkGF} {
    margin-left: 5rem;
  }
`;

export default Footer;
