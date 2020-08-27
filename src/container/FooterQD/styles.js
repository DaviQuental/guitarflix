import styled from 'styled-components';
import LogoQD from '../../components/LogoQD';

const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20rem 0;
    background-color: var(--dark-color);
    color: var(--light-color);
    font-size: 16rem;
    border-top: 3px solid var(--color-medium-blue);

    & > ${LogoQD} {
        margin-bottom: 20rem;
    }
`;

export default Footer;