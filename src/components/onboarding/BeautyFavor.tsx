import CubeButton from '@components/atoms/CubeButton'
import { Spacing } from '@components/atoms/Spacing'
import { Text } from '@components/atoms/Text'
import { FlexBox } from '@components/layouts/FlexBox'
import styled from '@emotion/styled'
import { onboardingState } from '@libs/store/onboard'
import { useRecoilState } from 'recoil'

interface BeautyFavorProps {
  updateMyFavor: (myFavor: string) => void
}
export function BeautyFavor({ updateMyFavor }: BeautyFavorProps) {
  const [info, setInfo] = useRecoilState(onboardingState)

  return (
    <>
      <FlexBox>
        <TextWrap>
          <Text children="뷰티" typo="Headline_16" color="white" />
        </TextWrap>
      </FlexBox>
      <FlexBox>
        <CubeButton
          variant={info.favor.includes('BMLIP') ? 'selected' : 'unSelected'}
          img="/images/makeup.png"
          text="립메이크업"
          className="BMLIP"
          onClick={() => {
            updateMyFavor('BMLIP')
          }}
        />
        <MarginDiv />
        <CubeButton
          variant={info.favor.includes('BMEYE') ? 'selected' : 'unSelected'}
          img="/images/eyeshadow.png"
          text="아이메이크업"
          onClick={() => {
            updateMyFavor('BMEYE')
          }}
        />
        <MarginDiv />
        <CubeButton
          variant={info.favor.includes('BFPER') ? 'selected' : 'unSelected'}
          img="/images/fragrance.png"
          text="향수"
          onClick={() => {
            updateMyFavor('BFPER')
          }}
        />
      </FlexBox>
      <Spacing height={12} />
      <FlexBox>
        <CubeButton
          variant={info.favor.includes('BFPLA') ? 'selected' : 'unSelected'}
          img="/images/candle2.png"
          text="캔들"
          onClick={() => {
            updateMyFavor('BFPLA')
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
