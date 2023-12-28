import styled from '@emotion/styled'
import { KeyOfPalette, theme } from '@styles/theme'
import { tagIconData } from '@utils/tagIconData'

type TagPropsType = {
  children: string
  colorIndex: ColorIndexVariant
  iconIndex: number
  smallCategory: any
  detailCategory: any
  answerNumber: number
}

type TagVariant = 'main' | 'dark'
type ColorVariant = 'purple' | 'pink' | 'aqua'

export type ColorIndexVariant = 0 | 1 | 2 | 3 | 4 | 5

const TAG_BG_COLOR_TYPE = {
  main: {
    purple: `${theme.palette.purple_100}`,
    pink: `${theme.palette.pink_100}`,
    aqua: `${theme.palette.aqua_100}`,
  },
  dark: {
    purple: `${theme.palette.purple_500}`,
    pink: `${theme.palette.pink_300}`,
    aqua: `${theme.palette.aqua_500}`,
  },
}

const TAG_TEXT_COLOR_TYPE = {
  main: `${theme.palette.gray_800}`,
  dark: `${theme.palette.white}`,
}

const TAG_PADDING_TYPE = {
  main: '6px 8px',
  dark: '6px 10px',
}

const TAG_COLOR_TYPE: Record<
  ColorIndexVariant,
  { variant: TagVariant; color: ColorVariant; iconColor: string }
> = {
  0: {
    variant: 'main',
    color: 'purple',
    iconColor: 'purple_500',
  },
  1: {
    variant: 'main',
    color: 'pink',
    iconColor: 'pink_500',
  },
  2: {
    variant: 'main',
    color: 'aqua',
    iconColor: 'aqua_300',
  },
  3: {
    variant: 'dark',
    color: 'purple',
    iconColor: '',
  },
  4: {
    variant: 'dark',
    color: 'pink',
    iconColor: '',
  },
  5: {
    variant: 'dark',
    color: 'aqua',
    iconColor: '',
  },
}

export const Tag = ({
  children,
  colorIndex,
  iconIndex,
  smallCategory,
  detailCategory,
  answerNumber,
}: TagPropsType) => {
  const IconComponent = tagIconData[smallCategory][detailCategory][iconIndex]

  return (
    <Wrapper
      tagVariant={
        (smallCategory === 'MAKEUP' && answerNumber === 5) ||
        (smallCategory === 'EXERCISE' && answerNumber === 6)
          ? 'dark'
          : TAG_COLOR_TYPE[colorIndex as ColorIndexVariant].variant
      }
      colorVariant={TAG_COLOR_TYPE[colorIndex as ColorIndexVariant].color}
    >
      <>
        {IconComponent &&
          TAG_COLOR_TYPE[colorIndex as ColorIndexVariant].variant ===
            'main' && (
            <IconComponent
              fill={
                TAG_COLOR_TYPE[colorIndex as ColorIndexVariant]
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
  tagVariant: TagVariant
  colorVariant: ColorVariant
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
