import CubeButton, { cubeButtonVariant } from '@components/atoms/CubeButton'
import { Spacing } from '@components/atoms/Spacing'
import { Text } from '@components/atoms/Text'
import { FlexBox } from '@components/layouts/FlexBox'
import styled from '@emotion/styled'
import { onboardingState } from '@libs/store/onboard'
import { useState } from 'react'
import { useRecoilState } from 'recoil'

export function BeautyFavor() {
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
      beautyFavor: content,
    })
  }

  console.log(info)
  return (
    <>
      <FlexBox>
        <TextWrap>
          <Text children="뷰티" typo={'Headline_16'} color={'white'} />
        </TextWrap>
      </FlexBox>
      <FlexBox>
        <CubeButton
          variant={buttonStates[0]}
          img="/images/makeup.png"
          text="립메이크업"
          onClick={() => {
            updateState(0)
            updateFavor('립메이크업')
          }}
        />
        <MarginDiv />
        <CubeButton
          variant={buttonStates[1]}
          img="/images/makeup.png"
          text="아이메이크업"
          onClick={() => {
            updateState(1)
            updateFavor('아이메이크업')
          }}
        />
        <MarginDiv />
        <CubeButton
          variant={buttonStates[2]}
          img="/images/fragrance.png"
          text="향수"
          onClick={() => {
            updateState(2)
            updateFavor('향수')
          }}
        />
      </FlexBox>
      <Spacing height={12} />
      <FlexBox>
        <CubeButton
          variant={buttonStates[3]}
          img="/images/fragrance.png"
          text="캔들"
          onClick={() => {
            updateState(3)
            updateFavor('캔들')
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
