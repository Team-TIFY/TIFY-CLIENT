import Lottie from 'react-lottie'
import animationData from '@assets/lotties/tify_loading.json'
import styled from '@emotion/styled'
import { theme } from '@styles/theme'

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
      <Lottie options={defaultOptions} height={100} width={100} />
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
