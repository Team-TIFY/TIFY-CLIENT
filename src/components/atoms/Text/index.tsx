import styled from '@emotion/styled'

import { theme, TextType } from '@styles/theme'
import { TextPropsType } from '@models/components/atoms/Text'

/**
 * @param as Text 컴포넌트의 종류 : 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div';
 * @param typo Typo theme 선택
 * @param color Palette theme 선택
 */

export const Text = ({
  typo = 'Body_14',
  as = 'h1',
  color,
  children,
  ...props
}: TextPropsType) => {
  return (
    <StyledText typoKey={typo} as={as} colorKey={color} {...props}>
      {children}
    </StyledText>
  )
}

const StyledText = styled.span<{
  typoKey: TextType['typo']
  colorKey?: TextType['color']
}>`
  white-space: pre-wrap;
  ${({ typoKey }) => theme.typo[typoKey]};
  color: ${({ colorKey }) => {
    return colorKey && theme.palette[colorKey]
  }};
`
