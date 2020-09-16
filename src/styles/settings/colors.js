import { createGlobalStyle } from "styled-components";

const Colors = createGlobalStyle`
    :root {

        /* PRIMARY */
        --light-color: #FFFFFF;
        --dark-color: #000000;
        --primary-light-color: #db8544;
        --primary-medium-color: #e17055;
        --video-shadow: rgba(0,0,0,0.8);

        /* GRAY */
        --color-light-gray: #F5F5F5;
    }
`;

export default Colors;
