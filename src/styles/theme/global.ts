import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';
import { media } from './theme';
import { palette } from './palette';

export const globalStyle = css`
    ${emotionReset}

    @font-face {
        font-family: 'S-CoreDream-3';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Medium.woff') format('woff');
        font-style: normal;
        font-weight: 500;
    }

    @font-face {
        font-family: 'SpoqaHanSansNeo';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Bold.woff') format('woff');
        font-weight: 700;
        font-style: normal;
    }

    @font-face {
        font-family: 'SpoqaHanSansNeo';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Medium.woff') format('woff');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'SpoqaHanSansNeo';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
    }

    @font-face { 
        font-family : 'Montserrat';
        src : url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');
        font-weight: 600;
        font-style: normal;
    }
    body {
        font-family: 'SpoqaHanSansNeo', SpoqaHanSansNeo, -apple-system, BlinkMacSystemFont,
        system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo',
        'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
        'Segoe UI Symbol', sans-serif !important;
        box-sizing: border-box;import { palette } from './palette';


        -webkit-tap-highlight-color: transparent;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        ${media.mobile} {
            -ms-overflow-style: none;
        }
    }
    button {
        background: inherit;
        border: none;
        box-shadow: none;
        border-radius: 0;
        padding: 0;
        overflow: visible;
        cursor: pointer;
    }
    button:focus {
        outline: none;
    }
    input:focus {
        outline: none;
    }
    textarea:focus {
        outline: none;
    }

    &::-webkit-scrollbar {
        ${media.mobile} {
            display: none;
        }
    }
`