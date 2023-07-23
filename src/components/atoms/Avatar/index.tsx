import styled from "@emotion/styled";
import { theme } from '@styles/theme';
import Kitty from "../../../assets/image/kitty_profile.svg";
import Monkey from "../../../assets/image/monkey_profile.svg"

type AvatarVariant = "xsmall" | "small" | "medium";
type ColorVariant = "purple" | "light";
type ProfileVariant = "kitty" | "monkey";
type VisibleVariant = "visible" | "invisible";


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

type VisibleType = {
  [key in VisibleVariant]: {
    display: string;
    bgColor: string;
  }
}



interface AvatarProps{
  variant: AvatarVariant;
  color: ColorVariant;
  imageUrl: ProfileVariant;
  isVisible: VisibleVariant;
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

const VISIBLE_TYPE: VisibleType = {
  visible: {
    bgColor: "transparent",
    display: "none",
  },
  invisible: {
    bgColor: `${theme.palette.dim_500}`,
    display: "block",
  }
}

export const Avatar = ({
  variant,
  color,
  imageUrl,
  isVisible
}: AvatarProps,) => {
  return (
    <Wrapper>
      <Dimmed variant={variant} isVisible={isVisible}/>
      <AvatarCircle variant={variant} color={color}>
        <ProfileImages  variant={variant} imageUrl={imageUrl}
        />
      </AvatarCircle>
    </Wrapper>
  )
}

const Wrapper = styled.div`
`

const Dimmed = styled.div<{
  variant: AvatarVariant;
  isVisible: VisibleVariant;
}>`
  position: fixed;
  border-radius: 50%;
  width: ${({ variant }) => `${AVATAR_SIZE_TYPE[variant].size}px`};
  height: ${({ variant }) => `${AVATAR_SIZE_TYPE[variant].size}px`};
  background-color: ${({ isVisible }) => `${VISIBLE_TYPE[isVisible].bgColor}`};
  display:  ${({ isVisible }) => `${VISIBLE_TYPE[isVisible].display}`};
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