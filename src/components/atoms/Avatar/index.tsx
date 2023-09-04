import styled from "@emotion/styled";
import { KeyOfPalette, theme } from "@styles/theme";
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

const profileVariants = [
  <Pink1 />,
  <Pink2 />,
  <Pink3 />,
  <Pink4 />,
  <Purple1 />,
  <Purple2 />,
  <Purple3 />,
  <Purple4 />,
  <White1 />,
  <White2 />,
  <White3 />,
  <White4 />,
];

type AvatarVariant = "xsmall" | "small" | "medium";
        
type VisibleVariant = "visible" | "invisible";

type AvatarShapeType = {
  [key in AvatarVariant]: {
    size: number;
  };
};

type VisibleType = {
  [key in VisibleVariant]: {
    display: "none" | "block";
    bgColor: string;
  };
};

export interface AvatarProps {
  variant: AvatarVariant;
  isVisible?: VisibleVariant;
}

const getRandomProfileImage = () => {
  const randomIndex = Math.floor(Math.random() * profileVariants.length);
  
  return profileVariants[randomIndex];
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
  isVisible = "visible",
}: AvatarProps) => {
  return (
    <Wrapper>
      <Dimmed variant={variant} isVisible={isVisible} />
      <AvatarCircle variant={variant}>
        <Svg
          children={getRandomProfileImage()}
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