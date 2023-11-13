import styled from '@emotion/styled'
import backgroundImage from '@assets/image/profile_background.png'
import profileBox from '@assets/image/profile_box.png'
import friendProfileBox from '@assets/image/profile_friend_box.png'
import shadow from '@assets/image/profile_shadow.png'

export const ProfileImage = ({ isFriend }: { isFriend: boolean }) => {
  return (
    <ImageWrapper>
      <BackgroundImage src={backgroundImage} />
      <ProfileBox src={isFriend ? friendProfileBox : profileBox} />
      <Shadow src={shadow} />
    </ImageWrapper>
  )
}

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
  width: 100%;
  height: auto;
  position: relative;
`

const BackgroundImage = styled.img`
  width: 100%;
  height: calc(100% * 14 / 15);
  object-fit: cover;
  z-index: 0;
`

const ProfileBox = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 279px;
  height: 294px;
  opacity: 0;
  animation-fill-mode: forwards;
  animation-name: fadeIn, moveToY1;
  animation-duration: 1.5s, 1.5s;
  animation-delay: 0.8s 0.8s;
  z-index: 2;
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
