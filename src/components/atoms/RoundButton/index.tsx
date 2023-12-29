import { useState } from 'react'
import styled from '@emotion/styled'

import { theme } from '@styles/theme'
import {
  RoundButtonVariantType,
  RoundButtonPropsType,
} from '@models/components/atoms/Button'
import {
  ROUND_BUTTON_COLOR_TYPE,
  ROUND_BUTTON_SHAPE_TYPE,
  ROUND_TEXT_COLOR_TYPE,
} from '@constants/atoms/button'
import RightChevron from '@assets/icons/RightChevron'
import { FlexBox } from '@components/layouts/FlexBox'
import { Text } from '../Text'
import Loading from '@components/atoms/Loading'
import Svg from '../Svg'

/**
 * @param variant 버튼의 종류 : 'circle'
 * @param fullWidth div의 길이를 꽉 채울 것인지 확인 : true | false (optional)
 * @param width 가로 길이를 명시적으로 작성 (단위 px) (optional)
 * @param isLoading 버튼이 로딩 중인지에 대한 state 설정 : true | false (optional)
 * @param onClick 버튼을 클릭할 때 발생하는 event 명시 (optional)
 */

type PropsType = Partial<RoundButtonPropsType<RoundButtonVariantType>>

export const RoundButton = ({
  children,
  variant = 'mediumRound',
  xlargeDescription,
  xlargeRightChildren,
  fullWidth = false,
  width,
  isLoading,
  onClick,
  ...props
}: PropsType) => {
  const [isClicked, setIsClicked] = useState(false)

  const handleClickButton = () => {
    onClick?.()
    setIsClicked(true)

    const id = setTimeout(() => {
      setIsClicked(false)
    }, 1000) // 1초 후 isClicked를 false로 설정하여 원래 크기로 돌아가도록 합니다.

    return () => clearTimeout(id)
  }

  const renderRoundButton = () => {
    if (variant === 'xlargeRound') {
      return (
        <>
          <FlexBox style={{ width: '100%', justifyContent: 'space-between' }}>
            <FlexBox direction="column">
              <Text
                typo={
                  xlargeDescription
                    ? `Subhead_16`
                    : `${ROUND_BUTTON_SHAPE_TYPE[variant].typo}`
                }
                as="span"
                style={{ marginLeft: '8px' }}
              >
                {children}
              </Text>
              {xlargeDescription && (
                <Text
                  typo="Caption_12R"
                  color="gray_300"
                  children={xlargeDescription}
                />
              )}
            </FlexBox>
            <Svg
              children={
                xlargeRightChildren ? xlargeRightChildren : <RightChevron />
              }
            />
          </FlexBox>
        </>
      )
    } else {
      return (
        <Text typo={`${ROUND_BUTTON_SHAPE_TYPE[variant].typo}`} as="span">
          <FlexBox>{children}</FlexBox>
        </Text>
      )
    }
  }

  return (
    <>
      <StyledButton
        width={width}
        variant={variant}
        fullWidth={fullWidth}
        isClicked={isClicked}
        onClick={handleClickButton}
        {...props}
      >
        {isLoading ? <Loading /> : renderRoundButton()}
      </StyledButton>
    </>
  )
}

const StyledButton = styled.button<{
  variant: RoundButtonVariantType
  width?: number
  fullWidth?: boolean
  isClicked?: boolean
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: ${({ variant }) =>
    `${ROUND_BUTTON_SHAPE_TYPE[variant].padding[0]}px ${ROUND_BUTTON_SHAPE_TYPE[variant].padding[1]}px`};
  border: ${({ variant }) =>
    variant === 'circle' ? `1px solid ${theme.palette.gray_400}` : 'none'};
  width: ${({ variant, fullWidth, width }) =>
    fullWidth
      ? '100%'
      : width
      ? `${width}px`
      : `${ROUND_BUTTON_SHAPE_TYPE[variant].width}px`};
  height: ${({ variant }) => `${ROUND_BUTTON_SHAPE_TYPE[variant].height}px`};
  background-color: ${({ variant }) =>
    `${ROUND_BUTTON_COLOR_TYPE.default[variant]}`};
  border-radius: ${({ variant }) =>
    `${ROUND_BUTTON_SHAPE_TYPE[variant].radius}px`};
  color: ${({ variant }) => `${ROUND_TEXT_COLOR_TYPE.default[variant]}`};
  transform: ${({ variant, isClicked }) =>
    variant === 'mediumRound' ? (isClicked ? 'scale(1.2)' : 'scale(1)') : ''};

  &:hover {
    background-color: ${({ variant }) =>
      `${ROUND_BUTTON_COLOR_TYPE.hover[variant]}`};
    color: ${({ variant }) => `${ROUND_TEXT_COLOR_TYPE.hover[variant]}`};
    border: none;
  }

  &:disabled {
    background-color: ${({ variant }) =>
      `${ROUND_BUTTON_COLOR_TYPE.disabled[variant]}`};
    color: ${({ variant }) => `${ROUND_TEXT_COLOR_TYPE.disabled[variant]}`};
  }
`
