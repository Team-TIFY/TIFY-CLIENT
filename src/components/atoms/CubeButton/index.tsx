/* eslint-disable prettier/prettier */
import styled from '@emotion/styled'
import { theme } from '@styles/theme'
import { Text } from '../Text'

export type cubeButtonVariant = 'unSelected' | 'selected' | 'disabled'

/**
 * @param variant 종류를 나타냄 "unSelected" | "selected" | "disabled" 중 선택 가능함
 * @param img 버튼에 들어갈 이미지 url을 나타냄
 * @param text 버튼에 들어갈 텍스트를 나타냄
 * @param onClick 버튼 클릭 시 발생할 이벤트를 넘겨주는 함수임
 */
interface CubeButtonProps {
  variant: cubeButtonVariant
  img: string
  text: string
  onClick?: () => void
}

const CubeButton = ({ variant, img, text, onClick }: CubeButtonProps) => {
  return (
    <StyledButton variant={variant} onClick={onClick}>
      <TextWrapper variant={variant}>
        <img src={img} width={40} height={40} />
        <Text
          typo="Caption_12M"
          as="div"
          color={variant === 'selected' ? 'gray_800' : variant === 'unSelected' ? 'gray_100' : 'gray_700'}
        >
          {text}
        </Text>
      </TextWrapper>
    </StyledButton>
  )
}

const StyledButton = styled.button<{ variant: cubeButtonVariant }>`
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

const TextWrapper = styled.div<{ variant: cubeButtonVariant }>`
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
