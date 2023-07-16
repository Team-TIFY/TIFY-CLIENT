import { css } from '@emotion/react';

export const calcRem = (px: number) => `${px / 16}rem`;
export const typo = {
    SCD_Headline_24: css`
        font-family:'S-CoreDream-3';
        font-size: ${calcRem(24)};
        line-height: 32px;
        font-weight: 500;
    `,
    Headline_20: css`
        font-family:'SpoqaHanSansNeo';
        font-size: ${calcRem(20)};
        line-height: 30px;
        font-weight: 500;
    `,
    Headline_16: css`
        font-family:'SpoqaHanSansNeo';
        font-size: ${calcRem(16)};
        line-height: 24px;
        font-weight: 700;
    `,
    Subhead_16: css`
        font-family: 'SpoqaHanSansNeo';
        font-size: ${calcRem(16)};
        line-height: 24px;
        font-weight: 500; 
        letter-spacing: -1.1%;
    `,
    Subhead_14: css`
        font-family: 'SpoqaHanSansNeo';
        font-size: ${calcRem(14)};
        line-height: 20px;
        font-weight: 500;
        letter-spacing: -1.1%;
    `,
    Body_16: css`
        font-family: 'SpoqaHanSansNeo';
        font-size: ${calcRem(16)};
        line-height: 24px;
        font-weight: 400;
        letter-spacing: -1.1%;
    `,
    Body_14: css`
        font-family: 'SpoqaHanSansNeo';
        font-size: ${calcRem(14)};
        line-height: 20px;
        font-weight: 400;
        letter-spacing: -1.1%;
    `,
    Caption_12M: css`
        font-family: 'SpoqaHanSansNeo';
        font-size: ${calcRem(12)};
        line-height: 20px;
        font-weight: 500;
        letter-spacing: -1.1%;
    `,
    Caption_10: css`
        font-family: 'SpoqaHanSansNeo';
        font-size: ${calcRem(10)};
        line-height: 16px;
        font-weight: 500;
        letter-spacing: -1.1%;
    `,
    Mont_Caption_12: css`
        font-family: 'Montserrat';
        font-size: ${calcRem(12)};
        line-height: 12px;
        font-weight: 600;
    `
} as const;