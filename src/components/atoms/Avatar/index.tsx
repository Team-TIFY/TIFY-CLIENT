import styled from "@emotion/styled";
import ProfileImage from "@assets/image/ProfileImage";

type AvatarVariant = 
| "xsmall" 
|  "small" 
| "medium"


type AvatarShapeType = {
  [key in AvatarVariant]: {
    size: number;
    profileSize: number;
  }
}

interface ButtonProps{
  variant: AvatarVariant;
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


export const Avatar = ({
  variant
}: ButtonProps) => {
  return (
    <Wrapper>
      <AvatarCircle variant={variant}>
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
}>`
  width: ${({ variant }) => `${AVATAR_SIZE_TYPE[variant].size}px`};
  height: ${({ variant }) => `${AVATAR_SIZE_TYPE[variant].size}px`};
  background-color: #D4B2FF;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`