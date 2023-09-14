import CubeButton, { cubeButtonVariant } from '@components/atoms/CubeButton'
import { Spacing } from '@components/atoms/Spacing'
import { Text } from '@components/atoms/Text'
import { FlexBox } from '@components/layouts/FlexBox'
import styled from '@emotion/styled'
import { onboardingState } from '@libs/store/onboard'
import { useState } from 'react'
import { useRecoilState } from 'recoil'

export function FashionFavor() {
  const [info, setInfo] = useRecoilState(onboardingState)
  const initialButtonStates: cubeButtonVariant[] = ['unSelected', 'unSelected', 'unSelected', 'unSelected']
  const [buttonStates, setButtonStates] = useState<cubeButtonVariant[]>(initialButtonStates)

  const updateState = (index: number) => {
    const newButtonStates = buttonStates.map((state, i) => (i === index ? 'selected' : 'unSelected'))
    setButtonStates(newButtonStates)
  }

  const updateFavor = (content: string) => {
    setInfo({
      ...info,
      fashionFavor: content,
    })
  }
  return (
    <>
      <FlexBox>
        <TextWrap>
          <Text children="패션" typo={'Headline_16'} color={'white'} />
        </TextWrap>
      </FlexBox>
      <FlexBox>
        <CubeButton
          variant={buttonStates[0]}
          img="/images/clothes.png"
          text="옷"
          onClick={() => {
            updateState(0)
            updateFavor('옷')
          }}
        />
        <MarginDiv />
        <CubeButton
          variant={buttonStates[1]}
          img="/images/fashionStuff.png"
          text="패션소품"
          onClick={() => {
            updateState(1)
            updateFavor('패션소품')
          }}
        />
        <MarginDiv />
        <CubeButton
          variant={buttonStates[2]}
          img="/images/fashionStuff.png"
          text="가방"
          onClick={() => {
            updateState(2)
            updateFavor('가방')
          }}
        />
      </FlexBox>
      <Spacing height={12} />
      <FlexBox>
        <CubeButton
          variant={buttonStates[3]}
          img="/images/fashionStuff.png"
          text="액세사리"
          onClick={() => {
            updateState(3)
            updateFavor('액세사리')
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
