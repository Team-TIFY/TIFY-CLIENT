import CubeButton, { cubeButtonVariant } from '@components/atoms/CubeButton'
import { Spacing } from '@components/atoms/Spacing'
import { Text } from '@components/atoms/Text'
import { FlexBox } from '@components/layouts/FlexBox'
import styled from '@emotion/styled'
import { onboardingState } from '@libs/store/onboard'
import { useRecoilState } from 'recoil'

interface HobbyFavorProps {
  updateMyFavor: (myFavor: string) => void
}

export function HobbyFavor({ updateMyFavor }: HobbyFavorProps) {
  const [info, setInfo] = useRecoilState(onboardingState)
  return (
    <>
      <FlexBox>
        <TextWrap>
          <Text children="취미" typo="Headline_16" color="white" />
        </TextWrap>
      </FlexBox>
      <FlexBox>
        <CubeButton
          variant={info.favor.includes('HCDIS') ? 'selected' : 'unSelected'}
          img="/images/cup.png"
          text="요리"
          onClick={() => {
            updateMyFavor('HCDIS')
          }}
        />
        <MarginDiv />
        <CubeButton
          variant={info.favor.includes('HEEXE') ? 'selected' : 'unSelected'}
          img="/images/exercise.png"
          text="운동"
          onClick={() => {
            updateMyFavor('HEEXE')
          }}
        />
        <MarginDiv />
        <CubeButton
          variant="disabled"
          img="/images/travel.png"
          text="여행"
          onClick={() => {
            updateMyFavor('HEEXE')
          }}
        />
      </FlexBox>
      <Spacing height={12} />
      <FlexBox>
        <CubeButton
          variant="disabled"
          img="/images/culturalLife.png"
          text="문화생활"
          onClick={() => {
            updateMyFavor('HEEXE')
          }}
        />
        <div style={{ width: '216px' }} />
      </FlexBox>
    </>
  )
}

const TextWrap = styled.div`
  margin-top: 24px;
  margin-bottom: 20px;
  width: 312px;
`

const MarginDiv = styled.div`
  width: 12px;
  height: 12px;
`
