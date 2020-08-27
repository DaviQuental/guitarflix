import styled from 'styled-components';
import container from '../../styles/tools/container';
import TagGF from '../TagGF';
import TitleGF from '../TitleGF';

export const Text = styled.div`
    max-width: 45%;
    padding-top: 10rem;

    ${TagGF} {
        margin-bottom: 40rem;
    }

    ${TitleGF} {
        margin-bottom: 15rem;
    }
`;

export const BannerGF = styled.section`
    ${container}
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-height: 70vh;
    height: 100vh;
`;

