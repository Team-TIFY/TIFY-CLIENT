import { css } from '@emotion/react'

export const calcRem = (px: number) => `${px / 16}rem`
export const typo = {
  SCD_Headline_24: css`
    font-family: 'S-CoreDream-3';
    font-size: ${calcRem(24)};
    line-height: 32px;
    font-weight: 500;
  `,
  SCD_Headline_20B: css`
    font-family: 'S-CoreDream-3';
    font-size: ${calcRem(20)};
    line-height: 30px;
    font-weight: 700;
  `,
  SCD_Headline_20: css`
    font-family: 'S-CoreDream-3';
    font-size: ${calcRem(20)};
    line-height: 30px;
    font-weight: 500;
  `,
  SCD_Body_12L: css`
    font-family: 'S-CoreDream-3';
    font-size: ${calcRem(12)};
    line-height: 16px;
    font-weight: 300;
    letter-spacing: -0.011em;
  `,
  SCD_Body_12M: css`
    font-family: 'S-CoreDream-3';
    font-size: ${calcRem(12)};
    line-height: 16px;
    font-weight: 500;
    letter-spacing: -0.011em;
  `,
  Headline_20: css`
    font-family: 'SpoqaHanSansNeo';
    font-size: ${calcRem(20)};
    line-height: 30px;
    font-weight: 500;
  `,
  Headline_16: css`
    font-family: 'SpoqaHanSansNeo';
    font-size: ${calcRem(16)};
    line-height: 24px;
    font-weight: 700;
  `,
  Subhead_16: css`
    font-family: 'SpoqaHanSansNeo';
    font-size: ${calcRem(16)};
    line-height: 24px;
    font-weight: 500;
    letter-spacing: -0.011em;
  `,
  Subhead_14: css`
    font-family: 'SpoqaHanSansNeo';
    font-size: ${calcRem(14)};
    line-height: 20px;
    font-weight: 500;
    letter-spacing: -0.011em;
  `,
  Body_16: css`
    font-family: 'SpoqaHanSansNeo';
    font-size: ${calcRem(16)};
    line-height: 24px;
    font-weight: 400;
    letter-spacing: -0.011em;
  `,
  Body_14: css`
    font-family: 'SpoqaHanSansNeo';
    font-size: ${calcRem(14)};
    line-height: 20px;
    font-weight: 400;
    letter-spacing: -0.011em;
  `,
  Caption_12M: css`
    font-family: 'SpoqaHanSansNeo';
    font-size: ${calcRem(12)};
    line-height: 20px;
    font-weight: 500;
    letter-spacing: -0.011em;
  `,
  Caption_12R: css`
    font-family: 'SpoqaHanSansNeo';
    font-size: ${calcRem(12)};
    line-height: 20px;
    font-weight: 400;
    letter-spacing: -1.1%;
  `,
  Caption_10: css`
    font-family: 'SpoqaHanSansNeo';
    font-size: ${calcRem(10)};
    line-height: 16px;
    font-weight: 500;
    letter-spacing: -0.011em;
  `,
  Mont_Caption_12SB: css`
    font-family: 'Montserrat';
    font-size: ${calcRem(12)};
    line-height: 12px;
    font-weight: 600;
  `,
  Mont_Caption_12B: css`
    font-family: 'Montserrat';
    font-size: ${calcRem(12)};
    line-height: 12px;
    font-weight: 700;
  `,
  Mont_Caption_12M: css`
    font-family: 'Montserrat';
    font-size: ${calcRem(12)};
    line-height: 12px;
    font-weight: 500;
  `,
} as const
