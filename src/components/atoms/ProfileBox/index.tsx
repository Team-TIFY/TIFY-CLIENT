import styled from '@emotion/styled'
import { TasteBoxVariantType } from '@utils/apis/favor/TasteType'
import { tasteBoxImage } from '@utils/tasteBoxImage'
import shadow from '@assets/image/profile_shadow.png'
import backgroundImage from '@assets/image/profile_background.png'
import profileBoxImage from '@assets/image/profile_box.png'

export type VariantType = 'profile' | 'shareProfile'

export type ProfileBoxProps = {
  variant?: VariantType
  favorList: TasteBoxVariantType[]
}

const ProfileBox = ({
  variant = 'profile',
  favorList = ['LIP', 'EXERCISE', 'ACCESSORY'],
}: ProfileBoxProps) => {
  return (
    <>
      <ImageWrapper>
        <BackgroundImage src={backgroundImage} />
        <ProfileBackgroundImage src={profileBoxImage} />
        {favorList.map((favor, index) => (
          <ProfileImage index={index} key={index} src={tasteBoxImage[favor]} />
        ))}
        <Shadow src={shadow} />
      </ImageWrapper>
    </>
  )
}

export default ProfileBox

const ImageWrapper = styled.div`
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
  height: calc(100% * (15 / 14));
`

const BackgroundImage = styled.img`
  width: 100%;
  height: calc(100% * (15 / 14));
  object-fit: cover;
  z-index: 0;
`

const ProfileBackgroundImage = styled.img`
  position: absolute;
  top: calc(50% - 147px);
  left: calc(50% - 139.5px);
  width: 279px;
  height: 294px;
  opacity: 0;
  animation-fill-mode: forwards;
  animation-name: fadeIn, moveToY1;
  animation-duration: 1.5s, 1.5s;
  animation-delay: 0.8s 0.8s;
  z-index: 2;
`

const ProfileImage = styled.img<{ index: number }>`
  width: 106px;
  height: 106px;
  position: absolute;
  top: ${({ index }) =>
    index === 0
      ? 'calc(50% - 52px)'
      : index === 1
      ? 'calc(50% - 106px)'
      : '50%'};
  left: ${({ index }) => (index === 1 || index === 2) && 'calc(50% - 12.5px)'};
  right: ${({ index }) => index === 0 && 'calc(50% - 12.5px)'};
  animation-fill-mode: forwards;
  animation-name: fadeIn, moveToY1;
  animation-duration: 1.5s, 1.5s;
  animation-delay: 0.8s 0.8s;
  z-index: 3;
`

const Shadow = styled.img`
  position: absolute;
  width: 199px;
  height: 37px;
  left: 0;
  right: 0;
  top: calc(50% + 75px);
  margin: auto;
  opacity: 0;
  animation-fill-mode: forwards;
  animation-name: fadeIn, moveToY2;
  animation-duration: 1.5s, 1.5s;
  animation-delay: 0.8s 0.8s;
  z-index: 1;
`
