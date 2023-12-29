import styled from '@emotion/styled'

import { theme } from '@styles/theme'
import {
  ButtonProps,
  SquareButtonSubVariantType,
  SquareButtonVariantType,
  SquareXlargeSubVariantType,
} from '@models/components/atoms/Button'
import {
  SQUARE_BUTTON_COLOR_TYPE,
  SQUARE_BUTTON_SHAPE_TYPE,
  SQUARE_TEXT_COLOR_TYPE,
} from '@constants/atoms/button'
import { Text } from '../Text'
import { FlexBox } from '@components/layouts/FlexBox'
import { Avatar } from '../Avatar'
import Svg from '../Svg'
import Siren from '@assets/icons/Siren'

const getRadius = (variant: SquareXlargeSubVariantType) => {
  switch (variant) {
    case 'alone':
      return '16px'
    case 'top':
    case 'withProfile':
    case 'LogOutBtn':
    case 'DeleteBtn':
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

const SquareButton = ({
  children,
  xlargeChildren,
  xlargeChildrenTwo,
  textColor,
  variant,
  subVariant = 'default',
  fullWidth,
  isLoading,
  selectedCount,
  xlargeVariant,
  imageUrl,
  ...props
}: ButtonProps<
  SquareButtonSubVariantType,
  SquareButtonVariantType,
  SquareXlargeSubVariantType
>) => {
  const handleVariant = (
    variant: SquareButtonVariantType,
    xlargeVariant: SquareXlargeSubVariantType,
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
    } else if (variant === 'xlargeSquare' && xlargeVariant === 'LogOutBtn') {
      return (
        <FlexBox direction="column" gap={8}>
          <>
            <Text typo="Body_16">
              {children}
              <br />
              {xlargeChildren}
            </Text>
          </>
        </FlexBox>
      )
    } else if (variant === 'xlargeSquare' && xlargeVariant === 'DeleteBtn') {
      return (
        <FlexBox direction="column" gap={8}>
          <>
            <Text typo="Body_16">
              {children}
              <br />
              {xlargeChildren}
              <br />
              {xlargeChildrenTwo}
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
          typo={`${SQUARE_BUTTON_SHAPE_TYPE[variant].typo}`}
          as="span"
          color={variant === 'xsmallSquareP' ? `gray_900` : textColor}
        >
          <FlexBox gap={variant === 'smallSquare' ? 37 : 0}>
            <>
              {handleVariant(
                variant,
                xlargeVariant as SquareXlargeSubVariantType,
              )}
            </>
          </FlexBox>
        </Text>
      )}
    </StyledButton>
  )
}

export default SquareButton

export const StyledButton = styled.button<{
  variant: SquareButtonVariantType
  subVariant: SquareButtonSubVariantType
  xlargeVariant?: SquareXlargeSubVariantType
  fullWidth?: boolean
}>`
  display: flex;
  position: relative;
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
      xlargeVariant === 'LogOutBtn' ||
      xlargeVariant === 'withProfile') &&
    `1px solid ${theme.palette.gray_900}`};
  width: ${({ variant, fullWidth }) =>
    fullWidth ? '100%' : `${SQUARE_BUTTON_SHAPE_TYPE[variant].width}px`};
  height: ${({ variant, xlargeVariant }) =>
    variant === 'xlargeSquare' && xlargeVariant === 'withProfile'
      ? '144px'
      : variant === 'xlargeSquare' && xlargeVariant === 'LogOutBtn'
      ? '88px'
      : variant === 'xlargeSquare' && xlargeVariant === 'DeleteBtn'
      ? '122px'
      : `${SQUARE_BUTTON_SHAPE_TYPE[variant].height}px`};
  background-color: ${({ variant, subVariant }) =>
    `${SQUARE_BUTTON_COLOR_TYPE[subVariant][variant]}`};
  border-radius: ${({ variant, xlargeVariant }) =>
    variant === 'xlargeSquare'
      ? getRadius(xlargeVariant as SquareXlargeSubVariantType)
      : `${SQUARE_BUTTON_SHAPE_TYPE[variant].radius}px`};
  color: ${({ variant, subVariant }) =>
    `${SQUARE_TEXT_COLOR_TYPE[subVariant][variant]}`};
  &:hover {
    background-color: ${({ variant }) =>
      variant === 'mediumSquare' ||
      (variant === 'smallSquare' &&
        `${SQUARE_BUTTON_COLOR_TYPE.hover[variant]}`)};
    color: ${({ variant }) =>
      variant === 'mediumSquare' ||
      (variant === 'smallSquare' &&
        `${SQUARE_TEXT_COLOR_TYPE.hover[variant]}`)};
    border-bottom: ${({ xlargeVariant }) =>
      xlargeVariant === 'top' ? `1px solid ${theme.palette.gray_900}` : 'none'};
    border: ${({ xlargeVariant }) => xlargeVariant !== 'top' && 'none'};
  }
`
