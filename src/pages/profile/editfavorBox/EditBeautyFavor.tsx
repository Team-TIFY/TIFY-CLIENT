import CubeButton from '@components/atoms/CubeButton'
import { Spacing } from '@components/atoms/Spacing'
import { Text } from '@components/atoms/Text'
import { FlexBox } from '@components/layouts/FlexBox'
import styled from '@emotion/styled'
import { TasteType } from '@utils/apis/favor/TasteType'

interface HobbyFavorProps {
  favorList: TasteType[]
  updateMyFavor: (myFavor: TasteType) => void
}

export function EditBeautyFavor({ updateMyFavor, favorList }: HobbyFavorProps) {
  return (
    <>
      <FlexBox>
        <TextWrap>
          <Text children="뷰티" typo="Headline_16" color="white" />
        </TextWrap>
      </FlexBox>
      <FlexBox>
        <CubeButton
          variant={favorList.includes('BMLIP') ? 'selected' : 'unSelected'}
          img="/images/makeup.png"
          text="립메이크업"
          className="BMLIP"
          onClick={() => {
            updateMyFavor('BMLIP')
          }}
        />
        <MarginDiv />
        <CubeButton
          variant={favorList.includes('BMEYE') ? 'selected' : 'unSelected'}
          img="/images/eyeshadow.png"
          text="아이메이크업"
          onClick={() => {
            updateMyFavor('BMEYE')
          }}
        />
        <MarginDiv />
        <CubeButton
          variant={favorList.includes('BFPER') ? 'selected' : 'unSelected'}
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
          variant={favorList.includes('BFPLA') ? 'selected' : 'unSelected'}
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
