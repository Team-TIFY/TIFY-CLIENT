import CubeButton, { cubeButtonVariant } from '@components/atoms/CubeButton'
import { Spacing } from '@components/atoms/Spacing'
import { Text } from '@components/atoms/Text'
import { FlexBox } from '@components/layouts/FlexBox'
import styled from '@emotion/styled'
import { onboardingState } from '@libs/store/onboard'
import { useRecoilState } from 'recoil'

interface FashionFavorProps {
  updateMyFavor: (myFavor: string) => void
}
export function FashionFavor({ updateMyFavor }: FashionFavorProps) {
  const [info, setInfo] = useRecoilState(onboardingState)

  return (
    <>
      <FlexBox>
        <TextWrap>
          <Text children="패션" typo="Headline_16" color="white" />
        </TextWrap>
      </FlexBox>
      <FlexBox>
        <CubeButton
          variant={info.favor.includes('FCTOP') ? 'selected' : 'unSelected'}
          img="/images/clothes.png"
          text="옷"
          onClick={() => {
            updateMyFavor('FCTOP')
          }}
        />
        <MarginDiv />
        <CubeButton
          variant={info.favor.includes('FEFAS') ? 'selected' : 'unSelected'}
          img="/images/fashionStuff.png"
          text="패션소품"
          onClick={() => {
            updateMyFavor('FEFAS')
          }}
        />
        <MarginDiv />
        <CubeButton
          variant={info.favor.includes('FEBAG') ? 'selected' : 'unSelected'}
          img="/images/fashionStuff.png"
          text="가방"
          onClick={() => {
            updateMyFavor('FEBAG')
          }}
        />
      </FlexBox>
      <Spacing height={12} />
      <FlexBox>
        <CubeButton
          variant={info.favor.includes('FEDIG') ? 'selected' : 'unSelected'}
          img="/images/fashionStuff.png"
          text="디지털 소품"
          onClick={() => {
            updateMyFavor('FEDIG')
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
