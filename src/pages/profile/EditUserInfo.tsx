import { RoundButton } from '@components/atoms/RoundButton'
import { Spacing } from '@components/atoms/Spacing'
import { FlexBox } from '@components/layouts/FlexBox'
import { Padding } from '@components/layouts/Padding'
import styled from '@emotion/styled'
import { Name } from '@pages/onboarding/details/signup/Name'
import { UserId } from '@pages/onboarding/details/signup/UserId'
import OnboardingStatus from '@components/profile/OnboardingStatus'
import { authState } from '@libs/store/auth'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { useEffect, useState } from 'react'
import { isBtnColorState, onboardingState } from '@libs/store/onboard'
import { Birth } from '@pages/onboarding/details/signup/Birth'
import useGetDate from '@libs/hooks/useGetDate'
import { profileState } from '@libs/store/profile'
import EditProfileButton from './EditProfileButton'

const EditUserInfo = () => {
  const auth = useRecoilValue(authState)
  const profileStateData = useRecoilValue(profileState)
  const [info, setInfo] = useRecoilState(onboardingState)
  const setBtnColor = useSetRecoilState(isBtnColorState)

  const { parseDate, getFormattedDate } = useGetDate()

  const [userName, setUserName] = useState(auth.userProfile.userName)
  const [userId, setUserId] = useState(auth.userProfile.userId)
  const [birth, setBirth] = useState(auth.userProfile.birth)
  const [onBoardingStatus, setOnBoardingStatus] = useState(
    auth.userProfile.onBoardingStatus,
  )

  useEffect(() => {
    if (!profileStateData.isEdit) {
      setUserName(auth.userProfile.userName)
      setUserId(auth.userProfile.userId)
      setBirth(auth.userProfile.birth)
      setOnBoardingStatus(auth.userProfile.onBoardingStatus)
      setInfo((prevInfo) => ({
        ...prevInfo,
        username: auth.userProfile.userName,
        id: auth.userProfile.userId,
        birth: parseDate(
          new Date(
            new Date(getFormattedDate(auth.userProfile.birth)).toISOString(),
          ),
        ),
        onboardingState: auth.userProfile.onBoardingStatus,
      }))
      setBtnColor(true)
    }
  }, [])

  useEffect(() => {
    if (profileStateData.isEdit) setOnBoardingStatus(info.onBoardingState)
  }, [info.onBoardingState, auth.userProfile.onBoardingStatus])

  return (
    <EditUserInfoWrapper>
      <Padding>
        <Name isEdit={true} value={userName} />
        <Spacing height={20} />
        <UserId isEdit={true} value={userId} />
        <Spacing height={20} />
        <Birth value={birth} textPadding={4} />
        <Spacing height={20} />
        <OnboardingStatus value={onBoardingStatus} />
        <EditProfileButton />
      </Padding>
    </EditUserInfoWrapper>
  )
}

export default EditUserInfo

const EditUserInfoWrapper = styled(FlexBox)`
  flex-direction: column;
  width: 100%;
  padding-bottom: 176px;
`
