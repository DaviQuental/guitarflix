import styled from 'styled-components';
import container from '../../styles/tools/container';
import TagQD from '../TagQD';
import TitleQD from '../TitleQD';

export const Text = styled.div`
    max-width: 45%;
    padding-top: 10rem;

    ${TagQD} {
        margin-bottom: 40rem;
    }

    ${TitleQD} {
        margin-bottom: 15rem;
    }
`;

export const BannerQD = styled.section`
    ${container}
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-height: 70vh;
    height: 100vh;
`;

