import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';

export const globalStyle = css`
    ${emotionReset}

    @font-face {
        font-family: 'S-CoreDream-3Light';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff') format('woff');
        font-style: normal;
        font-weight: 500;
    }

    @font-face {
        font-family: 'SpoqaHanSansNeo-Regular';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Regular.woff') format('woff');
        font-weight: 700;
        font-style: normal;
    }

    @font-face {
        font-family: 'SpoqaHanSansNeo-Regular';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Regular.woff') format('woff');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'SpoqaHanSansNeo-Regular';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
    }

    @font-face { 
        font-family : 'Montserrat';
        src : url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');
    }
`