import CubeButton, { cubeButtonVariant } from '@components/atoms/CubeButton'
import { Spacing } from '@components/atoms/Spacing'
import { Text } from '@components/atoms/Text'
import { FlexBox } from '@components/layouts/FlexBox'
import styled from '@emotion/styled'
import { onboardingState } from '@libs/store/onboard'
import { useState } from 'react'
import { useRecoilState } from 'recoil'

export function HobbyFavor() {
  const [info, setInfo] = useRecoilState(onboardingState)
  const initialButtonStates: cubeButtonVariant[] = [
    'unSelected',
    'unSelected',
    'unSelected',
    'unSelected',
  ]
  const [buttonStates, setButtonStates] =
    useState<cubeButtonVariant[]>(initialButtonStates)

  const updateState = (index: number) => {
    const newButtonStates = buttonStates.map((state, i) =>
      i === index ? 'selected' : 'unSelected',
    )
    setButtonStates(newButtonStates)
  }

  const updateFavor = (content: string) => {
    setInfo({
      ...info,
      hobbyFavor: content,
    })
  }
  return (
    <>
      <FlexBox>
        <TextWrap>
          <Text children="취미" typo="Headline_16" color="white" />
        </TextWrap>
      </FlexBox>
      <FlexBox>
        <CubeButton
          variant={buttonStates[0]}
          img="/images/cooking.png"
          text="요리"
          onClick={() => {
            updateState(0)
            updateFavor('요리')
          }}
        />
        <MarginDiv />
        <CubeButton
          variant={buttonStates[1]}
          img="/images/exercise.png"
          text="운동"
          onClick={() => {
            updateState(1)
            updateFavor('운동')
          }}
        />
        <MarginDiv />
        <CubeButton
          variant={buttonStates[2]}
          img="/images/travel.png"
          text="여행"
          onClick={() => {
            updateState(2)
            updateFavor('여행')
          }}
        />
      </FlexBox>
      <Spacing height={12} />
      <FlexBox>
        <CubeButton
          variant={buttonStates[3]}
          img="/images/culturalLife.png"
          text="문화생활"
          onClick={() => {
            updateState(3)
            updateFavor('문화생활')
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
