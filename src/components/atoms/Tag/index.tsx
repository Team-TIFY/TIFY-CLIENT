import styled from '@emotion/styled'

import { KeyOfPalette, theme } from '@styles/theme'
import {
  ColorIndexVariantType,
  ColorVariantType,
  TagPropsType,
  TagVariantType,
} from '@models/components/atoms/Tag'
import {
  TAG_COLOR_TYPE,
  TAG_BG_COLOR_TYPE,
  TAG_TEXT_COLOR_TYPE,
  TAG_PADDING_TYPE,
  TAG_ICON_DATA,
} from '@constants/atoms/tag'

export const Tag = ({
  children,
  colorIndex,
  iconIndex,
  smallCategory,
  detailCategory,
  answerNumber,
}: TagPropsType) => {
  const IconComponent = TAG_ICON_DATA[smallCategory][detailCategory][iconIndex]

  return (
    <Wrapper
      tagVariant={
        (smallCategory === 'MAKEUP' && answerNumber === 5) ||
        (smallCategory === 'EXERCISE' && answerNumber === 6)
          ? 'dark'
          : TAG_COLOR_TYPE[colorIndex as ColorIndexVariantType].variant
      }
      colorVariant={TAG_COLOR_TYPE[colorIndex as ColorIndexVariantType].color}
    >
      <>
        {IconComponent &&
          TAG_COLOR_TYPE[colorIndex as ColorIndexVariantType].variant ===
            'main' && (
            <IconComponent
              fill={
                TAG_COLOR_TYPE[colorIndex as ColorIndexVariantType]
                  ?.iconColor as KeyOfPalette
              }
            />
          )}
        {children}
      </>
    </Wrapper>
  )
}

const Wrapper = styled.div<{
  tagVariant: TagVariantType
  colorVariant: ColorVariantType
}>`
  ${theme.typo.Caption_12M};
  background-color: ${({ tagVariant, colorVariant }) =>
    `${TAG_BG_COLOR_TYPE[tagVariant][colorVariant]}`};
  color: ${({ tagVariant }) => `${TAG_TEXT_COLOR_TYPE[tagVariant]}`};
  padding: ${({ tagVariant }) => `${TAG_PADDING_TYPE[tagVariant]}`};
  border-radius: 6px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
`
