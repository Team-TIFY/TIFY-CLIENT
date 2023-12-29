import { Spacing } from '@components/atoms/Spacing'
import { Text } from '@components/atoms/Text'
import { useRecoilState } from 'recoil'
import styled from '@emotion/styled'
import { RoundButton } from '@components/atoms/RoundButton'
import { onboardingPageState, onboardingState } from '@libs/store/onboard'
import onBoardingImg from '@assets/image/onBoardingImg.png'
import VideoBox from '@components/WeeklyQuestion/VideoBox'
import { question } from '@utils/question'
export function HalfSuccess() {
  const [info, setInfo] = useRecoilState(onboardingState)
  const [goNext, setGoNext] = useRecoilState(onboardingPageState)

  const goToNext = () => {
    setGoNext({ ...goNext, onboardStatus: true })
  }
  return (
    <>
      <Spacing height={32} />
      <TextDiv>
        <Text typo="SCD_Headline_20">{info.username}님 안녕하세요!</Text>
        <Text typo="SCD_Headline_20">나의 취향 프로필을 꾸며볼까요?</Text>
      </TextDiv>
      <Spacing height={100} />
      <VideoBox category={'ME'} />
      <BottomSticker>
        <RoundButton
          variant="mediumRound"
          width={312}
          children="시작"
          onClick={goToNext}
        />
      </BottomSticker>
    </>
  )
}

const TextDiv = styled.div`
  width: 100%;
  padding: 0 24px 0 24px;
`

const ImgWrapper = styled.div``

const BottomSticker = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
