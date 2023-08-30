import styled from "@emotion/styled";
import { theme } from "@styles/theme";
import Pink1 from "@assets/icons/Pink1";
import Pink2 from "@assets/icons/Pink2";
import Pink3 from "@assets/icons/Pink2";
import Pink4 from "@assets/icons/Pink4";
import Purple1 from "@assets/icons/Purple1";
import Purple2 from "@assets/icons/Purple2";
import Purple3 from "@assets/icons/Purple3";
import Purple4 from "@assets/icons/Purple4";
import White1 from "@assets/icons/White1";
import White2 from "@assets/icons/White2";
import White3 from "@assets/icons/White3";
import White4 from "@assets/icons/White4";
import Svg from "../Svg";

type AvatarVariant = "xsmall" | "small" | "medium";

export type ProfileVariant =
  | "pink1"
  | "pink2"
  | "pink3"
  | "pink4"
  | "purple1"
  | "purple2"
  | "purple3"
  | "purple4"
  | "white1"
  | "white2"
  | "white3"
  | "white4";
        
type VisibleVariant = "visible" | "invisible";

type AvatarShapeType = {
  [key in AvatarVariant]: {
    size: number;
  };
};

type VisibleType = {
  [key in VisibleVariant]: {
    display: string;
    bgColor: string;
  };
};

export interface AvatarProps {
  variant: AvatarVariant;
  imageUrl: ProfileVariant;
  isVisible: VisibleVariant;
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
};

const PROFILE_IMAGE_TYPE: Record<ProfileVariant, React.ReactNode> = {
  pink1: <Pink1 />,
  pink2: <Pink2 />,
  pink3: <Pink3 />,
  pink4: <Pink4 />,
  purple1: <Purple1 />,
  purple2: <Purple2 />,
  purple3: <Purple3 />,
  purple4: <Purple4 />,
  white1: <White1 />,
  white2: <White2 />,
  white3: <White3 />,
  white4: <White4 />,
};

const VISIBLE_TYPE: VisibleType = {
  visible: {
    bgColor: "transparent",
    display: "none",
  },
  invisible: {
    bgColor: `${theme.palette.dim_500}`,
    display: "block",
  },
};

export const Avatar = ({
  variant,
  imageUrl,
  isVisible,
}: AvatarProps) => {
  return (
    <Wrapper>
      <Dimmed variant={variant} isVisible={isVisible} />
      <AvatarCircle variant={variant}>
        <Svg
          children={PROFILE_IMAGE_TYPE[imageUrl]}
          width={AVATAR_SIZE_TYPE[variant].size}
          height={AVATAR_SIZE_TYPE[variant].size}
        />
      </AvatarCircle>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const BaseStyle = styled.div<{
  variant: AvatarVariant;
}>`
  width: ${({ variant }) => `${AVATAR_SIZE_TYPE[variant].size}px`};
  height: ${({ variant }) => `${AVATAR_SIZE_TYPE[variant].size}px`};
`;

const Dimmed = styled(BaseStyle)<{
  variant: AvatarVariant;
  isVisible: VisibleVariant;
}>`
  display: ${({ isVisible }) =>
    `${VISIBLE_TYPE[isVisible].display}`};
  border-radius: 50%;
  position: absolute;
  background-color: ${({ isVisible }) =>
    `${VISIBLE_TYPE[isVisible].bgColor}`};
  display: ${({ isVisible }) =>
    `${VISIBLE_TYPE[isVisible].display}`};
`;

const AvatarCircle = styled(BaseStyle)<{
  variant: AvatarVariant;
}>`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;