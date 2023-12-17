import { FlexBox } from '@components/layouts/FlexBox'
import { Text } from '@components/atoms/Text'
import { Spacing } from '@components/atoms/Spacing'
import { RoundButton } from '@components/atoms/RoundButton'
import { useState, useEffect } from 'react'
import { TasteType } from '@utils/apis/favor/TasteType'
import { EditHobbyFavor } from '@pages/profile/editfavorBox/EditHobbyFavor'
import { EditFashionFavor } from '@pages/profile/editfavorBox/EditFashionFavor'
import { EditBeautyFavor } from '@pages/profile/editfavorBox/EditBeautyFavor'
import styled from '@emotion/styled'

const EditFavorBox = () => {
  const [favorList, setFavorList] = useState<TasteType[]>([])
  const [disabled, setDisabled] = useState(true)
  useEffect(() => {
    if (favorList.length === 3) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  })

  const updateMyFavor = (favorType: TasteType) => {
    if (favorList.includes(favorType)) {
      const newList = [...favorList]
      const index = newList.indexOf(favorType)
      newList.splice(index, 1)
      setFavorList([...newList])
    } else if (favorList.length === 3) {
      favorList.splice(favorList.length - 1)
      favorList.push(favorType)
      setFavorList(favorList)
    } else {
      setFavorList([...favorList, favorType])
    }
  }

  return (
    <>
      <FlexBox>
        <TextWrap>
          <Text
            children="가장 관심있는 취향 3가지를 선택해"
            typo="SCD_Headline_20"
            color="gray_100"
          />
          <Text
            children="나의 선물상자를 꾸며보세요"
            typo="SCD_Headline_20"
            color="gray_100"
          />
        </TextWrap>
      </FlexBox>
      <EditBeautyFavor favorList={favorList} updateMyFavor={updateMyFavor} />
      <EditFashionFavor favorList={favorList} updateMyFavor={updateMyFavor} />
      <EditHobbyFavor favorList={favorList} updateMyFavor={updateMyFavor} />
      <Spacing height={100} />
      <BottomSticker>
        <RoundButton
          variant="mediumRound"
          width={312}
          children="다음"
          disabled={disabled}
          onClick={() => {
            console.log('수정')
          }}
        />
      </BottomSticker>
    </>
  )
}

const TextWrap = styled.div`
  margin: 32px 24px;
  width: 312px;
`

const BottomSticker = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  bottom: 32px;
  left: 0;
  height: 3rem;
  width: 100%;
`

export default EditFavorBox