import styled from '@emotion/styled'
import { Player } from '@lottiefiles/react-lottie-player'

import { theme } from '@styles/theme'
import animationData from '@assets/lotties/tify_loading.json'

const Loading = () => {
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
