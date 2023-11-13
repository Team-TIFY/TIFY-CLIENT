import animationData from '@assets/lotties/tify_loading.json'
import styled from '@emotion/styled'
import { theme } from '@styles/theme'
import { Player } from '@lottiefiles/react-lottie-player'

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  return (
    <LottieWrapper>
      <Player
        autoplay
        loop
        src={animationData}
        style={{ height: '100px', width: '100px' }}
      ></Player>
    </LottieWrapper>
  )
}

export default Loading

const LottieWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: ${theme.palette.dim_800};
  display: flex;
  justify-content: center;
  align-items: center;
`
