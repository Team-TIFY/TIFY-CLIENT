import { ButtonHTMLAttributes } from 'react'
import { KeyOfTypo, theme } from '@styles/theme'
import styled from '@emotion/styled'
import { Text } from '../Text'
import Loading from '@components/atoms/Loading'
import { FlexBox } from '@components/layouts/FlexBox'
import Svg from '../Svg'
import { useState } from 'react'
import RightChevron from '@assets/icons/RightChevron'

type ButtonVariant =
  | 'xlargeRound'
  | 'mediumRound'
  | 'smallRound'
  | 'circle'
  | 'kakao'

const BUTTON_COLOR_TYPE = {
  default: {
    xlargeRound: `${theme.palette.gray_800}`,
    mediumRound: `${theme.palette.purple_500}`,
    smallRound: `${theme.palette.background}`,
    circle: `${theme.palette.gray_800}`,
    kakao: `${theme.palette.kakao}`,
  },
  disabled: {
    xlargeRound: `${theme.palette.gray_800}`,
    mediumRound: `${theme.palette.gray_700}`,
    smallRound: `${theme.palette.background}`,
    circle: `${theme.palette.gray_700}`,
    kakao: `${theme.palette.kakao}`,
  },
  hover: {
    xlargeRound: `${theme.palette.gray_800}`,
    mediumRound: `${theme.palette.purple_600}`,
    smallRound: `${theme.palette.gray_800}`,
    circle: `${theme.palette.gray_700}`,
    kakao: `${theme.palette.kakao}`,
  },
}

const TEXT_COLOR_TYPE = {
  default: {
    xlargeRound: `${theme.palette.gray_100}`,
    mediumRound: `${theme.palette.white}`,
    smallRound: `${theme.palette.gray_100}`,
    circle: `${theme.palette.gray_100}`,
    kakao: `${theme.palette.gray_900}`,
  },
  disabled: {
    xlargeRound: `${theme.palette.gray_100}`,
    mediumRound: `${theme.palette.gray_500}`,
    smallRound: `${theme.palette.gray_100}`,
    circle: `${theme.palette.gray_500}`,
    kakao: `${theme.palette.gray_900}`,
  },
  hover: {
    xlargeRound: `${theme.palette.gray_100}`,
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
  xlargeRound: {
    radius: 80,
    typo: 'Body_16',
    width: 312,
    height: 65,
    padding: [12, 24],
  },
  mediumRound: {
    radius: 24,
    typo: 'Subhead_16',
    width: 94,
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

interface ButtonProps<T extends ButtonVariant>
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant
  xlargeDescription?: T extends 'xlargeRound' ? string | undefined : undefined
  xlargeRightChildren?: T extends 'xlargeRound'
    ? React.ReactNode | undefined
    : undefined
  fullWidth?: boolean
  width?: number
  isLoading?: boolean
  onClick?: () => void
}

type Props = Partial<ButtonProps<ButtonVariant>>

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
}: Props) => {
  const [isClicked, setIsClicked] = useState(false)
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
                    : `${BUTTON_SHAPE_TYPE[variant].typo}`
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
        <Text typo={`${BUTTON_SHAPE_TYPE[variant].typo}`} as="span">
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
        onClick={(e) => {
          if (onClick) onClick()
          setIsClicked(true)
          setTimeout(() => {
            setIsClicked(false)
          }, 1000) // 1초 후 isClicked를 false로 설정하여 원래 크기로 돌아가도록 합니다.
        }}
        {...props}
      >
        {isLoading ? <Loading /> : renderRoundButton()}
      </StyledButton>
    </>
  )
}

const StyledButton = styled.button<{
  variant: ButtonVariant
  width?: number
  fullWidth?: boolean
  isClicked?: boolean
}>`
  display: flex;
  justify-content: center;
  align-items: center;
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
  transform: ${({ variant, isClicked }) =>
    variant === 'mediumRound' ? (isClicked ? 'scale(1.2)' : 'scale(1)') : ''};

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
