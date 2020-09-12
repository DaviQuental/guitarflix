import { createGlobalStyle } from 'styled-components';

const Colors = createGlobalStyle`
    :root {

        /* PRIMARY */
        --light-color: #FFFFFF;
        --dark-color: #000000;
        --video-shadow: rgba(0,0,0,0.8);
        
        /* BLUE */
        --color-light-blue: #74b9ff;
        --color-medium-blue: #0984e3;

        /* GRAY */
        --color-light-gray: #F5F5F5;


    }
`;

export default Colors;
