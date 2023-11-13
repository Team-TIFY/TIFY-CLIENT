import styled from '@emotion/styled'
import backgroundImage from '@assets/image/profile_background.png'

export const ProfileImage = () => {
  return (
    <ImageWrapper>
      <BackgroundImage src={backgroundImage} />
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
  height: 100%;
  object-fit: cover;
  z-index: 0;
`