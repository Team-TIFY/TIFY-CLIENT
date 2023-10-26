import React from 'react'
import styled from '@emotion/styled'
import { ChangeEvent, useEffect, useState } from 'react'
import { Checkbox } from './Checkbox'
import { Text } from '../../../components/atoms/Text'
import { Vector } from '../../../assets/icons/Vector'
import { useRecoilState } from 'recoil'
import { onboardingPageState } from '../../../libs/store/onboard'
import { FlexBox } from './../../../components/layouts/FlexBox'
import { RoundButton } from './../../../components/atoms/RoundButton/index'

export function Agreement() {
  const [checkList, setCheckList] = useState<string[]>([])
  const [goNext, setGoNext] = useRecoilState(onboardingPageState)
  const [btnColor, setBtnColor] = useState<boolean>(false)

  const checkAll = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.checked
      ? setCheckList([
          'age',
          'service',
          'handlePrivacy',
          'collectPrivacy',
          'marketing',
        ])
      : setCheckList([])
  }

  const check = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.checked
      ? setCheckList([...checkList, e.target.name])
      : setCheckList(checkList.filter((choice) => choice !== e.target.name))
  }

  useEffect(() => {
    if (
      checkList.includes('age') &&
      checkList.includes('service') &&
      checkList.includes('handlePrivacy') &&
      checkList.includes('collectPrivacy')
    ) {
      setBtnColor(true)
    } else {
      setBtnColor(false)
    }
  })

  const gotoReg = () => {
    if (btnColor === true) {
      setGoNext({ ...goNext, agreement: true })
    } else {
      setGoNext({ ...goNext, agreement: false })
    }
  }

  return (
    <div style={{ minHeight: '550px' }}>
      <FlexBox>
        <TextWrap>
          <Text
            children="TIFY 이용약관에 동의해 주세요"
            typo="SCD_Headline_20"
            color="gray_100"
          />
        </TextWrap>
      </FlexBox>
      <CheckDiv>
        <Checkbox
          children="약관 전체 동의"
          name="all"
          onChange={checkAll}
          checked={checkList.length === 5 ? true : false}
          border={true}
          padding={16}
        />
        <Vector visible="hidden" />
      </CheckDiv>
      <CheckDiv>
        <Checkbox
          children="만 14세 이상"
          name="age"
          onChange={check}
          checked={checkList.includes('age') ? true : false}
        />
        <Vector visible="hidden" />
      </CheckDiv>
      <CheckDiv>
        <Checkbox
          children="서비스 이용약관"
          name="service"
          onChange={check}
          checked={checkList.includes('service') ? true : false}
        />
        <Vector linkUrl="9e75acf1487c481a9fe818754198b73a" />
      </CheckDiv>
      <CheckDiv>
        <Checkbox
          children="개인정보 처리방침"
          name="handlePrivacy"
          onChange={check}
          checked={checkList.includes('handlePrivacy') ? true : false}
        />
        <Vector linkUrl="9e75acf1487c481a9fe818754198b73a" />
      </CheckDiv>
      <CheckDiv>
        <Checkbox
          children="개인정보 수집 및 이용 동의서"
          name="collectPrivacy"
          onChange={check}
          checked={checkList.includes('collectPrivacy') ? true : false}
        />
        <Vector linkUrl="9e75acf1487c481a9fe818754198b73a" />
      </CheckDiv>
      <CheckDiv>
        <Checkbox
          children="마케팅 수신 동의(선택)"
          name="marketing"
          onChange={check}
          checked={checkList.includes('marketing') ? true : false}
        />
        <Vector linkUrl="9e75acf1487c481a9fe818754198b73a" />
      </CheckDiv>
      <BottomSticker>
        <RoundButton
          variant="mediumRound"
          width={312}
          children="다음"
          onClick={gotoReg}
          disabled={!btnColor}
        />
      </BottomSticker>
    </div>
  )
}

const TextWrap = styled.div`
  margin: 32px;
  width: 312px;
`

const CheckDiv = styled.label`
  display: flex;
  justify-content: center;
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
