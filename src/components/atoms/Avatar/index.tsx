import styled from '@emotion/styled'
import { theme } from '@styles/theme'
import Pink1 from '/images/pink1.png'
import Pink2 from '/images/pink2.png'
import Pink3 from '/images/pink3.png'
import Pink4 from '/images/pink4.png'
import Purple1 from '/images/purple1.png'
import Purple2 from '/images/purple2.png'
import Purple3 from '/images/purple3.png'
import Purple4 from '/images/purple4.png'
import White1 from '/images/white1.png'
import White2 from '/images/white2.png'
import White3 from '/images/white3.png'
import White4 from '/images/white4.png'

const profileVariants = [
  Pink1,
  Pink2,
  Pink3,
  Pink4,
  Purple1,
  Purple2,
  Purple3,
  Purple4,
  White1,
  White2,
  White3,
  White4,
]

type AvatarVariant = 'xsmall' | 'small' | 'medium'

type VisibleVariant = 'visible' | 'invisible'

type AvatarShapeType = {
  [key in AvatarVariant]: {
    size: number
  }
}

type VisibleType = {
  [key in VisibleVariant]: {
    display: 'none' | 'block'
    bgColor: string
  }
}

/**
 * @param variant 크기 종류를 나타냄 "xsmall" | "small" | "medium" 중 선택 가능함
 * @param isVisible visible 종류를 나타냄 "visible" | "invisible" 중 하나 선택 가능함
 * @param imageUrl 이미지 URL을 나타냄
 */
export interface AvatarProps {
  variant: AvatarVariant
  isVisible?: VisibleVariant
  imageUrl?: string
}

const getRandomProfileImage = () => {
  const randomIndex = Math.floor(Math.random() * profileVariants.length)

  return profileVariants[randomIndex]
}

const AVATAR_SIZE_TYPE: AvatarShapeType = {
  xsmall: {
    size: 36,
  },
  small: {
    size: 48,
  },
  medium: {
    size: 60,
  },
}

const VISIBLE_TYPE: VisibleType = {
  visible: {
    bgColor: 'transparent',
    display: 'none',
  },
  invisible: {
    bgColor: `${theme.palette.dim_500}`,
    display: 'block',
  },
}

export const Avatar = ({
  variant,
  isVisible = 'visible',
  imageUrl = '',
}: AvatarProps) => {
  return (
    <Wrapper>
      <Dimmed variant={variant} isVisible={isVisible} />
      <AvatarCircle variant={variant}>
        <img
          src={!imageUrl ? getRandomProfileImage() : imageUrl}
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </AvatarCircle>
    </Wrapper>
  )
}

const Wrapper = styled.div``

const BaseStyle = styled.div<{
  variant: AvatarVariant
}>`
  width: ${({ variant }) => `${AVATAR_SIZE_TYPE[variant].size}px`};
  height: ${({ variant }) => `${AVATAR_SIZE_TYPE[variant].size}px`};
`

const Dimmed = styled(BaseStyle)<{
  variant: AvatarVariant
  isVisible: VisibleVariant
}>`
  display: ${({ isVisible }) => `${VISIBLE_TYPE[isVisible].display}`};
  border-radius: 50%;
  position: absolute;
  background-color: ${({ isVisible }) => `${VISIBLE_TYPE[isVisible].bgColor}`};
  display: ${({ isVisible }) => `${VISIBLE_TYPE[isVisible].display}`};
`

const AvatarCircle = styled(BaseStyle)<{
  variant: AvatarVariant
}>`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`
