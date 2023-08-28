import styled from "@emotion/styled";
import { theme } from '@styles/theme';

import pink1 from "../../../assets/icons/pink1.svg";
import pink2 from "../../../assets/icons/pink2.svg";
import pink3 from "../../../assets/icons/pink3.svg";
import pink4 from "../../../assets/icons/pink4.svg";
import transparent1 from "../../../assets/icons/transparent1.svg";
import transparent2 from "../../../assets/icons/transparent2.svg";
import transparent3 from "../../../assets/icons/transparent3.svg";
import transparent4 from "../../../assets/icons/transparent4.svg";
import white1 from "../../../assets/icons/white1.svg";
import white2 from "../../../assets/icons/white2.svg";
import white3 from "../../../assets/icons/white3.svg";
import white4 from "../../../assets/icons/white4.svg";

type AvatarVariant = "xsmall" | "small" | "medium";
type ProfileVariant = "pink1" | "pink2" | "pink3" | "pink4" | "transparent1" | "transparent2" | "transparent3" | "transparent4" | "white1" | "white2" | "white3" | "white4";
type VisibleVariant = "visible" | "invisible";

type AvatarShapeType = {
  [key in AvatarVariant]: {
    size: number;
  }
};

type VisibleType = {
  [key in VisibleVariant]: {
    display: string;
    bgColor: string;
  }
};

export interface AvatarProps {
  variant: AvatarVariant;
  imageUrl: ProfileVariant;
  isVisible: VisibleVariant;
}

const AVATAR_SIZE_TYPE: AvatarShapeType = {
  xsmall: {
    size: 36
  },
  small: {
    size: 48
  },
  medium: {
    size: 60
  }
};

const PROFILE_IMAGE_TYPE: Record<ProfileVariant, string> = {
  pink1, pink2, pink3, pink4, 
  transparent1, transparent2, transparent3, transparent4,
  white1, white2, white3, white4
};

const VISIBLE_TYPE: VisibleType = {
  visible: {
    bgColor: "transparent",
    display: "none",
  },
  invisible: {
    bgColor: `${theme.palette.dim_500}`,
    display: "block",
  }
};

export const Avatar = ({
  variant,
  imageUrl,
  isVisible
}: AvatarProps) => {
  return (
    <Wrapper>
      <Dimmed variant={variant} isVisible={isVisible} />
      <AvatarCircle variant={variant}>
        <ProfileImages src={PROFILE_IMAGE_TYPE[imageUrl]} variant={variant} />
      </AvatarCircle>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const CircleBaseStyle = styled.div<{
  variant: AvatarVariant;
}>`
  width: ${({ variant }) => `${AVATAR_SIZE_TYPE[variant].size}px`};
  height: ${({ variant }) => `${AVATAR_SIZE_TYPE[variant].size}px`};
`;

const Dimmed = styled(CircleBaseStyle)<{
  variant: AvatarVariant;
  isVisible: VisibleVariant;
}>`
  display: ${({ isVisible }) => `${VISIBLE_TYPE[isVisible].display}`};
  border-radius: 50%;
  position: absolute;
  background-color: ${({ isVisible }) => `${VISIBLE_TYPE[isVisible].bgColor}`};
  display:  ${({ isVisible }) => `${VISIBLE_TYPE[isVisible].display}`};
`;

const AvatarCircle = styled(CircleBaseStyle)<{
  variant: AvatarVariant;
}>`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImages = styled.img<{
  variant: AvatarVariant;
}>`
  width: ${({ variant }) => `${AVATAR_SIZE_TYPE[variant].size}px`};
  height: ${({ variant }) => `${AVATAR_SIZE_TYPE[variant].size}px`};
  border-radius: 50%;
`;