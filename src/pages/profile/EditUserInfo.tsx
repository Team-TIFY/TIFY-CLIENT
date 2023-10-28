import { RoundButton } from '@components/atoms/RoundButton'
import { Spacing } from '@components/atoms/Spacing'
import { FlexBox } from '@components/layouts/FlexBox'
import { Padding } from '@components/layouts/Padding'
import styled from '@emotion/styled'
import { Name } from '@pages/onboarding/details/signup/Name'
import { UserId } from '@pages/onboarding/details/signup/UserId'
import OnboardingStatus from '@components/profile/OnboardingStatus'
import { authState } from '@libs/store/auth'
import { useRecoilState, useRecoilValue } from 'recoil'
import { useEffect, useState } from 'react'
import { onboardingState } from '@libs/store/onboard'
import useProfileMutate from '@libs/hooks/useProfileMutate'
import { Birth } from '@pages/onboarding/details/signup/Birth'
import useGetDate from '@libs/hooks/useGetDate'
import { profileState } from '@libs/store/profile'
import { getGender } from '@utils/getGender'

const EditUserInfo = () => {
  const auth = useRecoilValue(authState)
  const profileStateData = useRecoilValue(profileState)
  const [info, setInfo] = useRecoilState(onboardingState)

  const { updateUserInfoMutate } = useProfileMutate()
  const { parseDate, getFormattedDate, getFormattedDateString } = useGetDate()

  const [userName, setUserName] = useState(auth.userProfile.userName)
  const [userId, setUserId] = useState(auth.userProfile.userId)
  const [birth, setBirth] = useState(auth.userProfile.birth)
  const [onBoardingStatus, setOnBoardingStatus] = useState(
    auth.userProfile.onBoardingStatus,
  )

  const handleClickEditComplete = () => {
    updateUserInfoMutate({
      userId: auth.userProfile.id,
      data: {
        username: info.username,
        id: info.id,
        birth: getFormattedDateString(info.birth),
        gender: getGender(auth.userProfile.gender),
        onBoardingState: info.onBoardingState
          ? info.onBoardingState
          : auth.userProfile.onBoardingStatus,
      },
    })
  }

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
        <Birth value="20010308" textPadding={4} />
        <Spacing height={20} />
        <OnboardingStatus value={onBoardingStatus} />
        <ButtonWrapper>
          <RoundButton
            variant="mediumRound"
            children="수정 완료"
            fullWidth={true}
            style={{ marginBottom: '9px' }}
            onClick={handleClickEditComplete}
          />
          <Spacing height={32} />
        </ButtonWrapper>
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

const ButtonWrapper = styled.div`
  width: 312px;
  position: fixed;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: 0;
`
