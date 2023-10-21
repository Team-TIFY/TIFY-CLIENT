import { FlexBox } from '@components/layouts/FlexBox'
import styled from '@emotion/styled'
import { isBtnColorState, onboardingState } from '@libs/store/onboard'
import { theme } from '@styles/theme'
import { useState } from 'react'
import { useRecoilState } from 'recoil'

export function Gender() {
  const [info, setInfo] = useRecoilState(onboardingState)
  const [isGender, setIsGender] = useState<string>('')
  const [btnColor, isBtnColor] = useRecoilState(isBtnColorState)

  const setGender = (gender: string) => {
    setInfo({
      ...info,
      gender: gender,
    })
    setIsGender(gender)
    console.log(info)
  }

  return (
    <FlexBox>
      <GenderDiv>
        <SmallText>성별</SmallText>
        <Group>
          <GenderWomanBtn
            onClick={() => {
              setGender('female')
              isBtnColor(() => true)
            }}
            gender={isGender}
          >
            여성
          </GenderWomanBtn>
          <GenderManBtn
            onClick={() => {
              setGender('male')
              isBtnColor(() => true)
            }}
            gender={isGender}
          >
            남성
          </GenderManBtn>
        </Group>
      </GenderDiv>
    </FlexBox>
  )
}

const GenderDiv = styled.div`
  width: 312px;
`

const SmallText = styled.div`
  ${theme.typo.Caption_12M};
  color: ${theme.palette.gray_300};
  margin-bottom: 8px;
`

const Group = styled.div`
  display: flex;
  align-items: center;
`

const GenderWomanBtn = styled.button<{
  gender: string
}>`
  width: 148px;
  height: 52px;
  color: ${({ gender }) =>
    gender == '여성' ? `${theme.palette.gray_800}` : `${theme.palette.white}`};
  background-color: ${({ gender }) =>
    gender == '여성' ? `${theme.palette.white}` : `${theme.palette.gray_900}`};
  ${theme.typo.Body_14};
  margin: 0 8px 0 8px;
  border-radius: 12px;
`

const GenderManBtn = styled.button<{
  gender: string
}>`
  width: 148px;
  height: 52px;
  color: ${({ gender }) =>
    gender == '남성' ? `${theme.palette.gray_800}` : `${theme.palette.white}`};
  background-color: ${({ gender }) =>
    gender == '남성' ? `${theme.palette.white}` : `${theme.palette.gray_900}`};
  ${theme.typo.Body_14};
  margin: 0 8px 0 8px;
  border-radius: 12px;
`
