import { RoundButton } from '@components/atoms/RoundButton'
import { Spacing } from '@components/atoms/Spacing'
import { Text } from '@components/atoms/Text'
import { FlexBox } from '@components/layouts/FlexBox'
import styled from '@emotion/styled'
import { useRecoilState } from 'recoil'
import { onboardingState } from '@libs/store/onboard'
import { BeautyFavor } from '@components/onboarding/BeautyFavor'
import { FashionFavor } from '@components/onboarding/FashionFavor'
import { HobbyFavor } from '@components/onboarding/HobbyFavor'
import { useEffect, useState } from 'react'
import { OnboardingApi } from '@utils/apis/onboarding/OnboardingApi'
import { authState } from '@libs/store/auth'
import { favorPriority } from '@libs/store/priority'
import { useNavigate } from 'react-router-dom'
import { parseFavorBox } from '@utils/parseFavorBox'

export function SelectFavor() {
  const [btnColor, setBtnColor] = useState(false)
  const [info, setInfo] = useRecoilState(onboardingState)
  const [auth, setAuth] = useRecoilState(authState)
  const navigate = useNavigate()
  useEffect(() => {
    if (info.favor.length === 3) {
      setBtnColor(true)
    } else {
      setBtnColor(false)
    }
  })

  const updateMyFavor = (favorType: string) => {
    if (info.favor.includes(favorType)) {
      const favorList = [...info.favor]
      const index = favorList.indexOf(favorType)
      favorList.splice(index, 1)
      setInfo({ ...info, favor: [...favorList] })
    } else if (info.favor.length === 3) {
      const favorList = [...info.favor]
      favorList.splice(info.favor.length - 1)
      favorList.push(favorType)
      setInfo({ ...info, favor: [...favorList] })
    } else {
      setInfo({ ...info, favor: [...info.favor, favorType] })
    }
  }

  const gotoReg = () => {
    if (btnColor) {
      const { favor, ...rest } = info

      OnboardingApi.PUT_ONBOARD_STATUS({
        userId: auth.userProfile.id,
        data: {
          ...rest,
          userFavorDtoList: favor.map((data) => parseFavorBox(data)),
        },
      })
      const favorWithPriority = favorPriority.filter((data) =>
        info.favor.includes(data.taste),
      )
      favorWithPriority.forEach((data) => {
        if (data.priority === 1) {
          localStorage.setItem('isOnboardingFavor', 'true')
          navigate(`/profile/newTaste/${data.taste}`)
        } else if (data.priority === 2) {
          localStorage.setItem('isOnboardingFavor', 'true')
          navigate(`/profile/newTaste/${data.taste}`)
          return
        } else {
          localStorage.setItem('isOnboardingFavor', 'true')
          navigate(`/profile/newTaste/${data.taste}`)
        }
      })
    }
  }

  return (
    <>
      <FlexBox>
        <TextWrap>
          <Text
            children="가장 관심있는 취향 3가지를"
            typo="SCD_Headline_20"
            color="gray_100"
          />
          <Text
            children="나의 취향상자에 담아보세요"
            typo="SCD_Headline_20"
            color="gray_100"
          />
        </TextWrap>
      </FlexBox>
      <BeautyFavor updateMyFavor={updateMyFavor} />
      <FashionFavor updateMyFavor={updateMyFavor} />
      <HobbyFavor updateMyFavor={updateMyFavor} />
      <Spacing height={100} />
      <BottomSticker>
        <RoundButton
          variant="mediumRound"
          width={312}
          children="다음"
          disabled={!btnColor}
          onClick={gotoReg}
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
