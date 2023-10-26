/* eslint-disable prettier/prettier */
import { ButtonHTMLAttributes } from 'react'
import { KeyOfTypo, theme } from '@styles/theme'
import styled from '@emotion/styled'
import { Text } from '../Text'
import Loading from '@components/atoms/Loading'

type ButtonVariant = 'mediumRound' | 'smallRound' | 'circle' | 'kakao'

const BUTTON_COLOR_TYPE = {
  default: {
    mediumRound: `${theme.palette.purple_500}`,
    smallRound: `${theme.palette.background}`,
    circle: `${theme.palette.gray_800}`,
    kakao: `${theme.palette.kakao}`,
  },
  disabled: {
    mediumRound: `${theme.palette.gray_700}`,
    smallRound: `${theme.palette.background}`,
    circle: `${theme.palette.gray_700}`,
    kakao: `${theme.palette.kakao}`,
  },
  hover: {
    mediumRound: `${theme.palette.purple_600}`,
    smallRound: `${theme.palette.gray_800}`,
    circle: `${theme.palette.gray_700}`,
    kakao: `${theme.palette.kakao}`,
  },
}

const TEXT_COLOR_TYPE = {
  default: {
    mediumRound: `${theme.palette.white}`,
    smallRound: `${theme.palette.gray_100}`,
    circle: `${theme.palette.gray_100}`,
    kakao: `${theme.palette.gray_900}`,
  },
  disabled: {
    mediumRound: `${theme.palette.gray_500}`,
    smallRound: `${theme.palette.gray_100}`,
    circle: `${theme.palette.gray_500}`,
    kakao: `${theme.palette.gray_900}`,
  },
  hover: {
    mediumRound: `${theme.palette.white}`,
    smallRound: `${theme.palette.gray_100}`,
    circle: `${theme.palette.gray_200}`,
    kakao: `${theme.palette.gray_900}`,
  },
}

type ButtonShapeType = {
  [key in ButtonVariant]: {
    radius: number
    typo: KeyOfTypo
    width: number
    height: number
    padding: [number, number]
  }
}

const BUTTON_SHAPE_TYPE: ButtonShapeType = {
  mediumRound: {
    radius: 24,
    typo: 'Subhead_16',
    width: 126,
    height: 48,
    padding: [12, 32],
  },
  smallRound: {
    radius: 18,
    typo: 'Subhead_14',
    width: 156,
    height: 36,
    padding: [8, 20],
  },
  circle: {
    radius: 50,
    typo: 'Subhead_16',
    width: 24,
    height: 24,
    padding: [0, 0],
  },
  kakao: {
    radius: 12,
    typo: 'Subhead_14',
    width: 156,
    height: 36,
    padding: [8, 20],
  },
}

/**
 * @param variant 버튼의 종류 : 'circle'
 * @param fullWidth div의 길이를 꽉 채울 것인지 확인 : true | false (optional)
 * @param width 가로 길이를 명시적으로 작성 (단위 px) (optional)
 * @param isLoading 버튼이 로딩 중인지에 대한 state 설정 : true | false (optional)
 * @param onClick 버튼을 클릭할 때 발생하는 event 명시 (optional)
 */

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant
  fullWidth?: boolean
  width?: number
  isLoading?: boolean
  onClick?: () => void
}
type Props = Partial<ButtonProps>

export const RoundButton = ({
  children,
  variant = 'mediumRound',
  fullWidth = false,
  width,
  isLoading,
  ...props
}: Props) => {
  return (
    <StyledButton
      width={width}
      variant={variant}
      fullWidth={fullWidth}
      {...props}
    >
      {isLoading ? (
        <Loading/>
      ) : (
        <Text typo={`${BUTTON_SHAPE_TYPE[variant].typo}`} as="span">
          {children}
        </Text>
      )}
    </StyledButton>
  )
}

const StyledButton = styled.button<{
  variant: ButtonVariant
  width?: number
  fullWidth?: boolean
}>`
  box-sizing: border-box;
  padding: ${({ variant }) =>
    `${BUTTON_SHAPE_TYPE[variant].padding[0]}px ${BUTTON_SHAPE_TYPE[variant].padding[1]}px`};
  border: ${({ variant }) =>
    variant === 'circle' ? `1px solid ${theme.palette.gray_400}` : 'none'};
  width: ${({ variant, fullWidth, width }) =>
    fullWidth
      ? '100%'
      : width
        ? `${width}px`
        : `${BUTTON_SHAPE_TYPE[variant].width}px`};
  height: ${({ variant }) => `${BUTTON_SHAPE_TYPE[variant].height}px`};
  background-color: ${({ variant }) => `${BUTTON_COLOR_TYPE.default[variant]}`};
  border-radius: ${({ variant }) => `${BUTTON_SHAPE_TYPE[variant].radius}px`};
  color: ${({ variant }) => `${TEXT_COLOR_TYPE.default[variant]}`};

  &:hover {
    background-color: ${({ variant }) => `${BUTTON_COLOR_TYPE.hover[variant]}`};
    color: ${({ variant }) => `${TEXT_COLOR_TYPE.hover[variant]}`};
    border: none;
  }

  &:disabled {
    background-color: ${({ variant }) =>
    `${BUTTON_COLOR_TYPE.disabled[variant]}`};
    color: ${({ variant }) => `${TEXT_COLOR_TYPE.disabled[variant]}`};
  }
`
