import styled from "@emotion/styled";
import ProfileImage from "@assets/image/ProfileImage";
import { theme } from '@styles/theme';

type AvatarVariant = 
| "xsmall" 
|  "small" 
| "medium"

type ColorVariant = 
| "purple"
| "light"

type AvatarShapeType = {
  [key in AvatarVariant]: {
    size: number;
    profileSize: number;
  }
}

type AvatarColorType = {
  [key in ColorVariant]: {
    color: string;
  }
}

interface AvatarProps{
  variant: AvatarVariant;
  color: ColorVariant;
}

const AVATAR_SIZE_TYPE: AvatarShapeType = {
  xsmall: {
    size: 36,
    profileSize: 28,
  },
  small: {
    size: 48,
    profileSize: 38,
  },
  medium: {
    size: 60,
    profileSize: 45,
  }
}

const AVATAR_COLOR_TYPE: AvatarColorType = {
  purple: {
    color: "#D4B2FF"
  },
  light: {
    color: `${theme.palette.purple_100}`
  }
}


export const Avatar = ({
  variant,
  color
}: AvatarProps) => {
  return (
    <Wrapper>
      <AvatarCircle variant={variant} color={color}>
        <ProfileImage
          size={AVATAR_SIZE_TYPE[variant].profileSize}
        />
      </AvatarCircle>
    </Wrapper>
  )
}

const Wrapper = styled.div` 
`

const AvatarCircle = styled.div<{
  variant: AvatarVariant;
  color: ColorVariant;
}>`
  width: ${({ variant }) => `${AVATAR_SIZE_TYPE[variant].size}px`};
  height: ${({ variant }) => `${AVATAR_SIZE_TYPE[variant].size}px`};
  background-color: ${({color})=> `${AVATAR_COLOR_TYPE[color].color}`};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`