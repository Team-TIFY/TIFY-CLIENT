import { ButtonHTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { theme, KeyOfTypo } from '@styles/theme'
import { Text } from '../Text'

type ButtonVariant =
  | 'mediumSquare'
  | 'medium2Square'
  | 'medium3Square'
  | 'smallSquare'
  | 'xsmallSquareP'
  | 'xsmallSquareS'

const BUTTON_COLOR_TYPE = {
  default: {
    mediumSquare: `${theme.palette.background}`,
    medium2Square: `${theme.palette.gray_800}`,
    medium3Square: `${theme.palette.gray_800}`,
    smallSquare: `${theme.palette.gray_500}`,
    xsmallSquareP: `${theme.palette.purple_400}`,
    xsmallSquareS: `${theme.palette.gray_800}`,
  },
  hover: {
    mediumSquare: `${theme.palette.gray_900}`,
    medium2Square: `${theme.palette.gray_800}`,
    medium3Square: `${theme.palette.gray_800}`,
    smallSquare: `${theme.palette.gray_800}`,
    xsmallSquareP: `${theme.palette.purple_400}`,
    xsmallSquareS: `${theme.palette.gray_800}`,
  },
  selected: {
    mediumDefault: `${theme.palette.white}`,
  },
}

const TEXT_COLOR_TYPE = {
  default: {
    mediumSquare: `${theme.palette.gray_200}`,
    medium2Square: `${theme.palette.gray_100}`,
    medium3Square: `${theme.palette.gray_100}`,
    smallSquare: `${theme.palette.gray_100}`,
    xsmallSquareP: `${theme.palette.gray_900}`,
    xsmallSquareS: `${theme.palette.gray_200}`,
  },
  hover: {
    mediumSquare: `${theme.palette.gray_100}`,
    medium2Square: `${theme.palette.gray_100}`,
    medium3Square: `${theme.palette.gray_100}`,
    smallSquare: `${theme.palette.gray_100}`,
    xsmallSquareP: `${theme.palette.gray_900}`,
    xsmallSquareS: `${theme.palette.gray_200}`,
  },
  selected: {
    mediumDefualt: `${theme.palette.gray_800}`,
  },
}

type ButtonShapeType = {
  [key in ButtonVariant]: {
    radius: number
    typo: KeyOfTypo
    width: number
    height: number
  }
}

const BUTTON_SHAPE_TYPE: ButtonShapeType = {
  mediumSquare: {
    radius: 12,
    typo: 'Body_14',
    width: 158,
    height: 40,
  },
  medium2Square: {
    radius: 6,
    typo: 'Subhead_16',
    width: 140,
    height: 40,
  },
  medium3Square: {
    radius: 18,
    typo: 'Body_14',
    width: 148,
    height: 52,
  },
  smallSquare: {
    radius: 12,
    typo: 'Subhead_14',
    width: 141,
    height: 44,
  },
  xsmallSquareP: {
    radius: 12,
    typo: 'Caption_12M',
    width: 64,
    height: 32,
  },
  xsmallSquareS: {
    radius: 12,
    typo: 'Caption_12M',
    width: 64,
    height: 32,
  },
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant
  fullWidth?: boolean
  isLoading?: boolean
  onClick?: () => void
}

const SquareButton = ({ children, variant, fullWidth, isLoading, onClick, ...props }: ButtonProps) => {
  return (
    <StyledButton variant={variant} fullWidth={fullWidth} onClick={onClick} {...props}>
      {isLoading ? (
        <p>로딩중입니다</p>
      ) : (
        <Text typo={`${BUTTON_SHAPE_TYPE[variant].typo}`} as="span">
          {children}
        </Text>
      )}
    </StyledButton>
  )
}

export default SquareButton

export const StyledButton = styled.button<{
  variant: ButtonVariant
  fullWidth?: boolean
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border: ${({ variant }) => (variant === 'mediumSquare' ? `1px solid ${theme.palette.gray_700}` : 'none')};
  width: ${({ variant, fullWidth }) => (fullWidth ? '100%' : `${BUTTON_SHAPE_TYPE[variant].width}px`)};
  height: ${({ variant }) => `${BUTTON_SHAPE_TYPE[variant].height}px`};
  background-color: ${({ variant }) => `${BUTTON_COLOR_TYPE.default[variant]}`};
  border-radius: ${({ variant }) => `${BUTTON_SHAPE_TYPE[variant].radius}px`};
  color: ${({ variant }) => `${TEXT_COLOR_TYPE.default[variant]}`};

  &:hover {
    background-color: ${({ variant }) => `${BUTTON_COLOR_TYPE.hover[variant]}`};
    color: ${({ variant }) => `${TEXT_COLOR_TYPE.hover[variant]}`};
    border: none;
  }
`
