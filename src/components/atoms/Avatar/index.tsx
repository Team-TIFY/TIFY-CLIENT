import styled from "@emotion/styled";
import { theme } from '@styles/theme';
import Kitty from "../../../assets/image/kitty_profile.svg";
import Monkey from "../../../assets/image/monkey_profile.svg"

type AvatarVariant = "xsmall" | "small" | "medium";

type ColorVariant = "purple" | "light";

type ProfileVariant = "kitty" | "monkey";

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

type ProfileImgType = {
  [key in ProfileVariant]: {
    imageUrl: string;
  }
}

interface AvatarProps{
  variant: AvatarVariant;
  color: ColorVariant;
  imageUrl: ProfileVariant;
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

const PROFILE_IMAGE_TYPE: ProfileImgType = {
  kitty: {
    imageUrl: Kitty,
  },
  monkey: {
    imageUrl: Monkey,
  },
}

export const Avatar = ({
  variant,
  color,
  imageUrl
}: AvatarProps,) => {
  return (
    <Wrapper>
      <AvatarCircle variant={variant} color={color}>
        <ProfileImages  variant={variant} imageUrl={imageUrl}
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

const ProfileImages = styled.image<{
  variant: AvatarVariant;
  imageUrl: ProfileVariant;
}>`
  width: ${({ variant }) => `${AVATAR_SIZE_TYPE[variant].profileSize}px`};
  height: ${({ variant }) => `${AVATAR_SIZE_TYPE[variant].profileSize}px`};
  background-image: url(${({ imageUrl }) => `${PROFILE_IMAGE_TYPE[imageUrl].imageUrl}`});
  background-size: cover;
`