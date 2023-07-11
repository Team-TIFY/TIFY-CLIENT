/**  @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { HTMLAttributes, ReactNode } from 'react';

export interface SpacingProps {
  width: 16 | 24;
  height: 4 | 8 | 12 | 16 | 20 | 24 | 32 | 48 | 64;
  isScroll?: boolean;
  side: boolean;
}

export const Spacing = ({
  width,
  height,
  isScroll = false,
  side
}: SpacingProps) => {
  return (
    <div
      css={css`
        height: ${side} ? 100% : ${isScroll} ? 48px : ${height}px;
        width: ${side} ? ${width}px : 100%;
      `}
    ></div>
  )
}