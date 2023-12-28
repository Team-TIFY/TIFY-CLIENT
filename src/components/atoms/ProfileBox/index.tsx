import styled from '@emotion/styled'
import { TasteBoxVariantType } from '@utils/apis/favor/TasteType'
import { tasteBoxImage } from '@utils/tasteBoxImage'
import shadow from '@assets/image/profile_shadow.png'
import backgroundImage from '@assets/image/profile_background.png'
import profileBoxImage from '@assets/image/profile_box.png'
import { useEffect, useState } from 'react'

export type VariantType = 'profile' | 'shareProfile'

export type ProfileBoxProps = {
  variant?: VariantType
  favorList: TasteBoxVariantType[]
}
const ProfileBox = ({ variant = 'profile', favorList }: ProfileBoxProps) => {
  const [myFavorList, setMyFavorList] = useState<TasteBoxVariantType[]>([])

  useEffect(() => {
    if (Array.isArray(favorList)) {
      if (favorList?.length < 3) {
        setMyFavorList([])
      } else {
        setMyFavorList([...favorList.slice(-3)])
      }
    }
  }, [favorList])

  return (
    <>
      <ImageWrapper variant={variant}>
        <BackgroundImage src={backgroundImage} variant={variant} />
        <ProfileBackgroundImage src={profileBoxImage} variant={variant} />
        {myFavorList.map((favor, index) => (
          <ProfileImage
            index={index}
            variant={variant}
            key={index}
            src={tasteBoxImage[favor]}
          />
        ))}
        <Shadow src={shadow} variant={variant} />
      </ImageWrapper>
    </>
  )
}

export default ProfileBox

const ImageWrapper = styled.div<{ variant: VariantType }>`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes moveToY1 {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(-20px);
    }
  }
  @keyframes moveToY2 {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(20px);
    }
  }
  position: relative;
  width: 100%;
  height: ${({ variant }) =>
    variant === 'shareProfile' ? '200px' : `calc(100% * (15 / 14))`};
`

const BackgroundImage = styled.img<{ variant: VariantType }>`
  width: 100%;
  height: ${({ variant }) =>
    variant === 'shareProfile' ? '186px' : `calc(100% * (15 / 14))`};
  margin-top: ${({ variant }) => variant === 'shareProfile' && '14px'};
  object-fit: cover;
  z-index: 0;
`

const ProfileBackgroundImage = styled.img<{ variant: VariantType }>`
  position: absolute;
  top: ${({ variant }) =>
    variant === 'shareProfile' ? 'calc(50% - 80px)' : 'calc(50% - 130px)'};
  left: ${({ variant }) =>
    variant === 'shareProfile' ? `calc(50% - 78px)` : `calc(50% - 139.5px)`};
  width: ${({ variant }) => (variant === 'shareProfile' ? `155px` : `279px`)};
  height: ${({ variant }) => (variant === 'shareProfile' ? `163px` : `294px`)};
  opacity: 1;
  z-index: 2;
  ${({ variant }) =>
    variant === 'profile' &&
    `
    animation-fill-mode: forwards;
    animation-name: fadeIn, moveToY1;
    animation-duration: 1.5s, 1.5s;
    animation-delay: 0.8s 0.8s;
  `}
`

const ProfileImage = styled.img<{ index: number; variant: VariantType }>`
  width: ${({ variant }) => (variant === 'shareProfile' ? '59px' : '106px')};
  height: ${({ variant }) => (variant === 'shareProfile' ? '59px' : '106px')};
  position: absolute;
  top: ${({ index, variant }) =>
    index === 0
      ? variant === 'shareProfile'
        ? 'calc(50% - 25px)'
        : 'calc(50% - 32px)'
      : index === 1
      ? variant === 'shareProfile'
        ? 'calc(50% - 58px)'
        : 'calc(50% - 86px)'
      : variant === 'shareProfile'
      ? 'calc(50%)'
      : 'calc(50% + 20px)'};
  left: ${({ index, variant }) =>
    (index === 1 || index === 2) &&
    (variant === 'shareProfile' ? 'calc(50% - 7px)' : 'calc(50% - 12.5px)')};
  right: ${({ index, variant }) =>
    index === 0 && variant === 'shareProfile'
      ? 'calc(50% + 5px)'
      : 'calc(50% + 10px)'};
  z-index: 3;
  ${({ variant }) =>
    variant === 'profile' &&
    `
    animation-fill-mode: forwards;
    animation-name: fadeIn, moveToY1;
    animation-duration: 1.5s, 1.5s;
    animation-delay: 0.8s 0.8s;
  `}
`

const Shadow = styled.img<{ variant: VariantType }>`
  position: absolute;
  width: 199px;
  height: 37px;
  left: 0;
  right: 0;
  top: ${({ variant }) =>
    variant === 'shareProfile' ? 'calc(50% + 58px)' : 'calc(50% + 95px)'};
  margin: auto;
  opacity: 1;
  z-index: 1;
  ${({ variant }) =>
    variant === 'profile' &&
    `
    animation-fill-mode: forwards;
    animation-name: fadeIn, moveToY2;
    animation-duration: 1.5s, 1.5s;
    animation-delay: 0.8s 0.8s;
  `}
`
