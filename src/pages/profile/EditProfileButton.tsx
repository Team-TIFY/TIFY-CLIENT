import { RoundButton } from '@components/atoms/RoundButton'
import { Spacing } from '@components/atoms/Spacing'
import styled from '@emotion/styled'
import useGetDate from '@libs/hooks/useGetDate'
import useProfileMutate from '@libs/hooks/useProfileMutate'
import { authState } from '@libs/store/auth'
import { isBtnColorState, onboardingState } from '@libs/store/onboard'
import { profileState } from '@libs/store/profile'
import { getGender } from '@utils/getGender'
import { useRecoilState, useRecoilValue } from 'recoil'

const EditProfileButton = () => {
  const btnColor = useRecoilValue(isBtnColorState)
  const auth = useRecoilValue(authState)
  const info = useRecoilValue(onboardingState)
  const [profileStateData, setProfileStateData] = useRecoilState(profileState)

  const { updateUserInfoMutate } = useProfileMutate()
  const { getFormattedDateString } = useGetDate()

  const handleClickComplete = () => {
    setProfileStateData((prevState) => ({
      ...prevState,
      buttonText: '수정 완료',
    }))
  }

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

  return (
    <ButtonWrapper>
      <RoundButton
        variant="mediumRound"
        children={profileStateData.buttonText}
        fullWidth={true}
        style={{ marginBottom: '9px' }}
        onClick={
          profileStateData.buttonText === '수정 완료'
            ? handleClickEditComplete
            : handleClickComplete
        }
        disabled={!btnColor}
      />
      {profileStateData.buttonText === '수정 완료' && <Spacing height={32} />}
    </ButtonWrapper>
  )
}

export default EditProfileButton

const ButtonWrapper = styled.div`
  width: 312px;
  position: fixed;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: 0;
`
