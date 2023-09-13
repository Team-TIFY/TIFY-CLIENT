import { RoundButton } from '@components/atoms/RoundButton'
import { Spacing } from '@components/atoms/Spacing'
import { Text } from '@components/atoms/Text'
import { FlexBox } from '@components/layouts/FlexBox'
import styled from '@emotion/styled'
import { useRecoilState } from 'recoil'
import { isBtnColorState } from '@libs/store/onboard'
import { BeautyFavor } from './Favors/BeautyFavor'
import { FashionFavor } from './Favors/FashionFavor'
import { HobbyFavor } from './Favors/HobbyFavor'

export function SelectFavor() {
  const [btnColor, setBtnColor] = useRecoilState(isBtnColorState)

  return (
    <>
      <FlexBox>
        <TextWrap>
          <Text
            children="가장 관심있는 취향
3가지를 골라 주세요"
            typo={'SCD_Headline_20'}
            color={'gray_100'}
          />
        </TextWrap>
      </FlexBox>
      <BeautyFavor />
      <FashionFavor />
      <HobbyFavor />
      <Spacing height={100} />
      <BottomSticker>
        <RoundButton variant="mediumRound" width={312} children="다음" disabled={!btnColor} />
      </BottomSticker>
    </>
  )
}

const TextWrap = styled.div`
  margin: 32px 24px;
  width: 312px;
`

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
