/* eslint-disable prettier/prettier */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

/**
 * @param width 가로 너비를 나타냄
 * @param height 높이를 나타냄
 * @param variant 종류를 나타냄 "default" | "scroll" | "side" 중 하나 선택 가능함
 */
export interface SpacingProps {
  width?: 16 | 24
  height?: 4 | 8 | 12 | 16 | 20 | 24 | 32 | 48 | 64 | 100
  variant?: 'default' | 'scroll' | 'side'
}

export const Spacing = ({
  width = 16,
  height = 24,
  variant = 'default',
}: SpacingProps) => {
  return (
    <div
      css={css`
        width: ${variant === 'default'
          ? '100%'
          : variant === 'side'
            ? `${width}px`
            : '100%'};
        height: ${variant === 'default'
          ? `${height}px`
          : variant === 'scroll'
            ? '48px'
            : '100%'};
      `}
    ></div>
  )
}
