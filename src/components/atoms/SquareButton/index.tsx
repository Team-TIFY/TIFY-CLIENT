import { ButtonHTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { theme, KeyOfTypo, TextType } from '@styles/theme'
import { Text } from '../Text'
import { FlexBox } from '@components/layouts/FlexBox'
import Svg from '../Svg'
import Siren from '@assets/icons/Siren'
import { Avatar } from '../Avatar'

type ButtonVariant =
  | 'xlargeSquare'
  | 'largeSquare'
  | 'mediumSquare'
  | 'medium2Square'
  | 'medium3Square'
  | 'smallSquare'
  | 'xsmallSquareP'
  | 'xsmallSquareS'

type ButtonSubVariant = 'default' | 'selected' | 'selectedMultiple'
type XlargeSubVariant = 'alone' | 'top' | 'middle' | 'foot' | 'withProfile'

const BUTTON_COLOR_TYPE = {
  default: {
    xlargeSquare: `${theme.palette.gray_800}`,
    largeSquare: `${theme.palette.gray_800}`,
    mediumSquare: `${theme.palette.background}`,
    medium2Square: `${theme.palette.gray_800}`,
    medium3Square: `${theme.palette.gray_800}`,
    smallSquare: `${theme.palette.gray_500}`,
    xsmallSquareP: `${theme.palette.purple_400}`,
    xsmallSquareS: `${theme.palette.gray_800}`,
  },
  selected: {
    xlargeSquare: `${theme.palette.gray_800}`,
    largeSquare: `${theme.palette.white}`,
    mediumSquare: `${theme.palette.background}`,
    medium2Square: `${theme.palette.white}`,
    medium3Square: `${theme.palette.white}`,
    smallSquare: `${theme.palette.gray_500}`,
    xsmallSquareP: `${theme.palette.purple_400}`,
    xsmallSquareS: `${theme.palette.gray_800}`,
  },
  selectedMultiple: {
    xlargeSquare: `${theme.palette.gray_800}`,
    largeSquare: `${theme.palette.white}`,
    mediumSquare: `${theme.palette.background}`,
    medium2Square: `${theme.palette.white}`,
    medium3Square: `${theme.palette.gray_800}`,
    smallSquare: `${theme.palette.gray_500}`,
    xsmallSquareP: `${theme.palette.purple_400}`,
    xsmallSquareS: `${theme.palette.gray_800}`,
  },
  hover: {
    mediumSquare: `${theme.palette.gray_900}`,
    smallSquare: `${theme.palette.gray_800}`,
  },
}

const TEXT_COLOR_TYPE = {
  default: {
    xlargeSquare: `${theme.palette.gray_100}`,
    largeSquare: `${theme.palette.gray_100}`,
    mediumSquare: `${theme.palette.gray_200}`,
    medium2Square: `${theme.palette.gray_100}`,
    medium3Square: `${theme.palette.gray_100}`,
    smallSquare: `${theme.palette.gray_100}`,
    xsmallSquareP: `${theme.palette.gray_900}`,
    xsmallSquareS: `${theme.palette.gray_200}`,
  },
  selected: {
    xlargeSquare: `${theme.palette.gray_100}`,
    largeSquare: `${theme.palette.gray_800}`,
    mediumSquare: `${theme.palette.gray_200}`,
    medium2Square: `${theme.palette.gray_800}`,
    medium3Square: `${theme.palette.gray_800}`,
    smallSquare: `${theme.palette.gray_100}`,
    xsmallSquareP: `${theme.palette.gray_900}`,
    xsmallSquareS: `${theme.palette.gray_200}`,
  },
  selectedMultiple: {
    xlargeSquare: `${theme.palette.gray_100}`,
    largeSquare: `${theme.palette.gray_800}`,
    mediumSquare: `${theme.palette.gray_200}`,
    medium2Square: `${theme.palette.gray_800}`,
    medium3Square: `${theme.palette.gray_100}`,
    smallSquare: `${theme.palette.gray_100}`,
    xsmallSquareP: `${theme.palette.gray_900}`,
    xsmallSquareS: `${theme.palette.gray_200}`,
  },
  hover: {
    mediumSquare: `${theme.palette.gray_100}`,
    smallSquare: `${theme.palette.gray_100}`,
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
  xlargeSquare: {
    radius: 16,
    typo: 'Body_16',
    width: 328,
    height: 48,
  },
  largeSquare: {
    radius: 6,
    typo: 'Subhead_16',
    width: 296,
    height: 48,
  },
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

const getRadius = (variant: XlargeSubVariant) => {
  switch (variant) {
    case 'alone':
      return '16px'
    case 'top':
    case 'withProfile':
      return '16px 16px 0px 0px'
    case 'middle':
      return '0px'
    case 'foot':
      return '0px 0px 16px 16px'
    default:
      return '0px'
  }
}

/**
 * @param variant Button의 type을 나타냄 'xlargeSquare' | 'largeSquare' | 'mediumSquare' | 'medium2Square' | 'medium3Square' | 'smallSquare' | 'xsmallSquareP' | 'xsmallSquareS'
 * @param subVariant Button의 세부 type을 나타냄 'default' | 'selected' | 'selectedMultiple'
 * @param xlargeChildren 'xlargeSquare' variant에 들어갈 추가 children을 나타냄
 * @param fullWidth 너비를 100%로 할지 여부를 나타냄
 * @param isLoading 로딩 중인 경우를 위한 필드임
 * @param selectedCount 'selectedMultiple'인 경우 오른쪽 상단에 들어갈 숫자 Svg 컴포넌트임
 * @param xlargeVariant 'xlargeSquare' variant인 경우 하위 type을 나타냄 'alone' | 'top' | 'middle' | 'foot' | 'withProfile'
 * @param profileUrl variant가 'xlargeSquare', xlargeVariant가 'withProfile'인 경우 들어갈 이미지 url을 나타냄
 */

interface ButtonProps<
  T extends ButtonSubVariant,
  K extends ButtonVariant,
  G extends XlargeSubVariant,
> extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant
  subVariant: T
  textColor?: TextType['color']
  xlargeChildren?: K extends 'xlargeSquare' ? React.ReactNode : undefined
  fullWidth?: boolean
  isLoading?: boolean
  selectedCount?: T extends 'selectedMultiple' ? React.ReactNode : undefined
  xlargeVariant?: K extends 'xlargeSquare' ? XlargeSubVariant : undefined
  imageUrl?: G extends 'withProfile' ? string : undefined
  onClick?:
    | (() => void)
    | ((event: React.MouseEvent<HTMLButtonElement>) => void)
}

const SquareButton = ({
  children,
  xlargeChildren,
  textColor = 'gray_100',
  variant,
  subVariant = 'default',
  fullWidth,
  isLoading,
  selectedCount,
  xlargeVariant,
  imageUrl,
  ...props
}: ButtonProps<ButtonSubVariant, ButtonVariant, XlargeSubVariant>) => {
  const handleVariant = (
    variant: ButtonVariant,
    xlargeVariant: XlargeSubVariant,
  ) => {
    if (variant === 'xlargeSquare' && xlargeVariant === 'withProfile') {
      return (
        <FlexBox direction="column" gap={8}>
          <Avatar variant="small" imageUrl={imageUrl ? imageUrl : ''} />
          <>
            <Text typo="Body_16">
              {children}
              <br />
              {xlargeChildren}
            </Text>
          </>
        </FlexBox>
      )
    } else if (variant === 'smallSquare') {
      return (
        <>
          {children}
          <Svg children={<Siren />} />
        </>
      )
    } else if (variant === 'largeSquare' || variant === 'medium2Square') {
      return subVariant === 'selectedMultiple' ? (
        <>
          {children}
          <div style={{ position: 'absolute', right: '4px', top: '4px' }}>
            {selectedCount}
          </div>
        </>
      ) : (
        <>{children}</>
      )
    } else {
      return children
    }
  }

  return (
    <StyledButton
      variant={variant}
      subVariant={subVariant}
      xlargeVariant={xlargeVariant}
      fullWidth={fullWidth}
      {...props}
    >
      {isLoading ? (
        <p>로딩중입니다</p>
      ) : (
        <Text
          typo={`${BUTTON_SHAPE_TYPE[variant].typo}`}
          as="span"
          color={variant === 'xsmallSquareP' ? `gray_900` : textColor}
        >
          <FlexBox gap={variant === 'smallSquare' ? 37 : 0}>
            <>{handleVariant(variant, xlargeVariant as XlargeSubVariant)}</>
          </FlexBox>
        </Text>
      )}
    </StyledButton>
  )
}

export default SquareButton

export const StyledButton = styled.button<{
  variant: ButtonVariant
  subVariant: ButtonSubVariant
  xlargeVariant?: XlargeSubVariant
  fullWidth?: boolean
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border: ${({ variant }) =>
    variant === 'mediumSquare'
      ? `1px solid ${theme.palette.gray_700}`
      : 'none'};
  border-bottom: ${({ xlargeVariant }) =>
    (xlargeVariant === 'top' ||
      xlargeVariant === 'middle' ||
      xlargeVariant === 'withProfile') &&
    `1px solid ${theme.palette.gray_900}`};
  width: ${({ variant, fullWidth }) =>
    fullWidth ? '100%' : `${BUTTON_SHAPE_TYPE[variant].width}px`};
  height: ${({ variant, xlargeVariant }) =>
    variant === 'xlargeSquare' && xlargeVariant === 'withProfile'
      ? '144px'
      : `${BUTTON_SHAPE_TYPE[variant].height}px`};
  background-color: ${({ variant, subVariant }) =>
    `${BUTTON_COLOR_TYPE[subVariant][variant]}`};
  border-radius: ${({ variant, xlargeVariant }) =>
    variant === 'xlargeSquare'
      ? getRadius(xlargeVariant as XlargeSubVariant)
      : `${BUTTON_SHAPE_TYPE[variant].radius}px`};
  color: ${({ variant, subVariant }) =>
    `${TEXT_COLOR_TYPE[subVariant][variant]}`};
  &:hover {
    background-color: ${({ variant }) =>
      variant === 'mediumSquare' || variant === 'smallSquare'
        ? `${BUTTON_COLOR_TYPE.hover[variant]}`
        : null};
    color: ${({ variant }) =>
      variant === 'mediumSquare' || variant === 'smallSquare'
        ? `${TEXT_COLOR_TYPE.hover[variant]}`
        : null};
    border-bottom: ${({ xlargeVariant }) =>
      xlargeVariant === 'top' ? `1px solid ${theme.palette.gray_900}` : 'none'};
    border: ${({ xlargeVariant }) => xlargeVariant !== 'top' && 'none'};
  }
`
