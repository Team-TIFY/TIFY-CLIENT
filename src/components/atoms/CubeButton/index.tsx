import styled from '@emotion/styled'

import {
  CubeButtonPropsType,
  CubeButtonVariantType,
} from '@models/components/atoms/CubeButton'
import { theme } from '@styles/theme'
import { Text } from '../Text'

/**
 * @param variant 종류를 나타냄 "unSelected" | "selected" | "disabled" 중 선택 가능함
 * @param img 버튼에 들어갈 이미지 url을 나타냄
 * @param text 버튼에 들어갈 텍스트를 나타냄
 */

const CubeButton = ({ variant, img, text, ...props }: CubeButtonPropsType) => {
  const getTextColor = () => {
    if (variant === 'selected') {
      return 'gray_800'
    } else if (variant === 'unSelected') {
      return 'gray_100'
    } else {
      return 'gray_700'
    }
  }

  return (
    <StyledButton variant={variant} onClick={props.onClick}>
      <TextWrapper variant={variant}>
        <img src={img} width={40} height={40} />
        <Text typo="Caption_12M" as="div" color={getTextColor()}>
          {text}
        </Text>
      </TextWrapper>
    </StyledButton>
  )
}

const StyledButton = styled.button<{ variant: CubeButtonVariantType }>`
  width: 96px;
  height: 96px;
  background-color: ${({ variant }) =>
    variant === 'selected'
      ? theme.palette.white
      : variant === 'disabled'
      ? theme.palette.gray_900
      : theme.palette.gray_800};
  border-radius: 6px;
  cursor: pointer;
`

const TextWrapper = styled.div<{ variant: CubeButtonVariantType }>`
  width: 80px;
  height: 64px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  img {
    opacity: ${({ variant }) => variant === 'disabled' && `40%`};
  }
`

export default CubeButton
