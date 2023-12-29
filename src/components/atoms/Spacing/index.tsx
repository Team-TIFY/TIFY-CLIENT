/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import { SpacingPropsType } from '@models/components/atoms/Spacing'

/**
 * @param width 가로 너비를 나타냄
 * @param height 높이를 나타냄
 * @param variant 종류를 나타냄 "default" | "scroll" | "side" 중 하나 선택 가능함
 */

export const Spacing = ({
  width = 16,
  height = 24,
  variant = 'default',
  style,
}: SpacingPropsType) => {
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
        ${style};
      `}
    ></div>
  )
}
